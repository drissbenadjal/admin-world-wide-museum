import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

//images
import logo from "../images/logo.svg";
import dashboard from "../images/icons/dashboard.svg";
import tickets from "../images/icons/tickets.svg";
import logout from "../images/icons/logout.svg";

export const Sidebar = () => {

    const { user, handleLogin, handleLogout } = useContext(AuthContext);

    return (
        <>
            <nav className="sidebar">
                <Link to="/" className="link_logo">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
                <ul className="link-main">
                    <li>
                        <Link to={`/dashboard`}>
                            <div className="link-content">
                                <img src={dashboard} alt="" />
                                <p>Dashboard</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/dashboard/reservations`}>
                            <div className="link-content">
                                <img src={tickets} alt="" />
                                <p>Réservations</p>
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul className="link-secondary">
                    <li>
                        <button onClick={handleLogout}>
                            <div className="link-content">
                                <img src={logout} alt="" />
                                <p>Déconnexion</p>
                            </div>
                        </button>
                    </li>
                </ul>
            </nav>
        </>

    );
};