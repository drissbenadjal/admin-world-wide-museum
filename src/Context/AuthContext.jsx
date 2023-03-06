import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    const handleLogin = () => {
        setUser(true);
    };

    const handleLogout = () => {
        setUser(false);
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };