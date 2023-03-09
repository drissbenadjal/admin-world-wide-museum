import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCookie } from '../utils/cookieUtils';
import { AuthContext } from '../Context/AuthContext';

export const Logout = () => {
    const token = getCookie('token');
    const navigate = useNavigate();
    const { loged, handleLogout } = useContext(AuthContext);
    useEffect(() => {
        if (!loged) {
            navigate("/");
            return
        }
        handleLogout();
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    }, [token, loged, handleLogout, navigate]);
    return (
        <>
            <h1>Redirection...</h1>
        </>
    );
}