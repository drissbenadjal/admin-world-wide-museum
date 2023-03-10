import React, { createContext, useState, useEffect } from 'react';
import { addCookie, getCookie, removeCookie } from '../utils/cookieUtils';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [loadedAuth, setLoadedAuth] = useState(false);
    const [user, setUser] = useState({});
    const [loged, setLoged] = useState();
    const [errorMessage, setErrorMessage] = useState(false);

    const verifyToken = async (token) => {
        fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/verify/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    setLoged(true);
                    const user = {
                        id: data.id,
                        pseudo: data.pseudo,
                        email: data.email,
                    };
                    setUser(user);
                } else {
                    setLoged(false);
                    setUser({});
                    removeCookie("token");
                }
                setLoadedAuth(true);
            })
            .catch((error) => {
                setLoged(false);
                setUser([]);
                removeCookie("token");
                setLoadedAuth(true);
            });
    };

    const isLogged = () => {
        if (getCookie("token")) {
            verifyToken(getCookie("token"));
        } else {
            setLoged(false);
            setUser([]);
            removeCookie("token");
            setLoadedAuth(true);
        }
    };

    useEffect(() => {
        isLogged();
    }, []);

    const handleLogin = async (pseudo, password) => {

        fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/connexion/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pseudo: pseudo,
                mdp: password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    addCookie("token", data.token, 1);
                    setLoged(true);
                    const user = {
                        id: data.id,
                        pseudo: data.pseudo,
                        email: data.email,
                    };
                    setUser(user);
                } else {
                    setLoged(false);
                    setUser([]);
                    removeCookie("token");
                    setErrorMessage('Identifiants ou mot de passe incorrect');
                }
            })
            .catch((error) => {
                setLoged(false);
                setUser([]);
                removeCookie("token");
                setErrorMessage("Une erreur est survenue");
            });
    };


    const handleLogout = () => {
        setLoged(false);
        setUser({});
        removeCookie("token");
    };

    return (
        <AuthContext.Provider value={{ loged, handleLogin, handleLogout, verifyToken, isLogged, user, loadedAuth, errorMessage }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };