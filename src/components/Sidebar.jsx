import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <>
            <nav className="sidebar">
                <div className="sidebar_part1">

                </div>
                <div className="sidebar_part2">
                    <ul>
                        <li>Dashboard</li>
                        <li>Réservations</li>
                    </ul>
                </div>
                <div className="sidebar_part3">
                    <button>Log Out</button>
                </div>
            </nav>
        </>

    );
};