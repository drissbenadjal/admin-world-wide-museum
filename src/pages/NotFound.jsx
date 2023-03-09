import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

import { AuthContext } from "../Context/AuthContext";

export const NotFound = () => {

    const { loged } = useContext(AuthContext);

    return (
        <main className={loged ? "notfound__loged" : "notfound"}>
            <div className="notfound__container">
                <div className="notfound__content">
                    <img src={logo} alt="logo" width="500" height="500" />
                    <div className="notfound__text">
                        <h1>404</h1>
                        <h2>Désolé, il n’y a rien ici</h2>
                        <p>
                            {" "}
                            La page que vous recherchez a peut-être été supprimée, son nom a changé ou est temporairement indisponible..
                        </p>
                        <Link to="/" className="link">Retour à la page d’accueil</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}