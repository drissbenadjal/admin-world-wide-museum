import { Link } from "react-router-dom";

//images
import logo from "../images/logo.svg";
import dashboard from "../images/icons/dashboard.svg";
import reservations from "../images/icons/tickets.svg";
import utilisateurs from "../images/icons/utilisateurs.svg";
import logout from "../images/icons/logout.svg";

export const Sidebar = () => {
    return (
        <>
            <nav className="sidebar">
                <div className="sidebar_contain">
                    <div className="logonav">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="liennav">
                        <ul>
                            <Link href={``}>
                                <li>
                                    <img src={dashboard} alt="" />
                                    <p>Dashboard</p>
                                </li>
                            </Link>
                            <Link href={``}>
                                <li>
                                    <img src={reservations} alt="" />
                                    <p>Réservations</p>
                                </li>
                            </Link>
                            <Link href={``}>
                                <li>
                                    <img src={utilisateurs} alt="" />
                                    <p>Utilisateurs</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="logout">
                        <button>
                            <img src={logout} alt="" />
                            <p>Déconnection</p>
                        </button>
                    </div>
                </div>
            </nav>
        </>

    );
};