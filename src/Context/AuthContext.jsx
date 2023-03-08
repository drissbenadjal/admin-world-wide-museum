import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [loadedAuth, setLoadedAuth] = useState(false);
    const [user, setUser] = useState([]);
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
                    setUser([]);
                    localStorage.removeItem("token");
                }
                setLoadedAuth(true);
            })
            .catch((error) => {
                setLoged(false);
                setUser([]);
                localStorage.removeItem("token");
                setLoadedAuth(true);
            });
    };

    const isLogged = () => {
        if (localStorage.getItem("token")) {
            verifyToken(localStorage.getItem("token"));
        } else {
            setLoged(false);
            setUser([]);
            localStorage.removeItem("token");
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
                    localStorage.setItem("token", data.token);
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
                    localStorage.removeItem("token");
                    setErrorMessage('Identifiants incorrects');
                }
            })
            .catch((error) => {
                setLoged(false);
                setUser([]);
                localStorage.removeItem("token");
                setErrorMessage("Une erreur est survenue");
            });
    };

    const handleLogout = () => {
        setLoged(false);
        setUser([]);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ loged, handleLogin, handleLogout, verifyToken, isLogged, user, loadedAuth, errorMessage }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };