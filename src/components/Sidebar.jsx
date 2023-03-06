import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

//images
import logo from "../images/logo.svg";
import dashboard from "../images/icons/dashboard.webp";
import reservations from "../images/icons/tickets.webp";
import utilisateurs from "../images/icons/utilisateurs.webp";
import logout from "../images/icons/logout.webp";

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
                                <img src={reservations} alt="" />
                                <p>Réservations</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/dashboard/utilisateurs`}>
                            <div className="link-content">
                                <img src={utilisateurs} alt="" />
                                <p>Utilisateurs</p>
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button onClick={handleLogout}>
                            <img src={logout} alt="" />
                            <p>Déconnexion</p>
                        </button>
                    </li>
                </ul>
            </nav>
        </>

    );
};