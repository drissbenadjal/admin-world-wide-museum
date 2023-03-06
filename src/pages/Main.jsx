import { Link } from "react-router-dom";
import { ResaTable } from "../components/ResaTable";

export const Main = () => {
    return (
        <>
            <h1>Bienvenue admin</h1>
            <section className="statCards">
                <div className="statCard">
                    <span className="statCard__progression">+ 20%</span>
                    <div className="statCard__number">354</div>
                    <div className="statCard__label">Réservations cette semaine</div>
                </div>
            </section>
            <ResaTable />
        </>
    );
}