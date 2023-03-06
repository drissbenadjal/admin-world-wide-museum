import React, { useState, useEffect } from "react";

export const StatsResa = ({ reservations }) => {
    const [reservationsThisWeek, setReservationsThisWeek] = useState([]);

    useEffect(() => {
        if (reservations.length === 0) {
            return;
        }
        const now = new Date();
        // obtenir le lundi de la semaine en cours
        const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));

        // obtenir le dimanche de la semaine en cours
        const sunday = new Date(now.setDate(now.getDate() - now.getDay() + 7));

        // filtrer les réservations de la semaine en cours
        reservations.filter((resa) => {
            const resaDate = new Date(resa.date_reservation);
            if (resaDate >= monday && resaDate <= sunday) {
                setReservationsThisWeek((reservationsThisWeek) => [...reservationsThisWeek, resa]);
            }
        });
    }, [reservations]);


    console.log(reservationsThisWeek);

    return (
        <section className="statCards">
            <div className="statCard">
                <span className="statCard__progression">+ 20%</span>
                <div className="statCard__number">{reservationsThisWeek.length}</div>
                <div className="statCard__label">Réservations cette semaine</div>
            </div>
            <div className="statCard">
                <div className="statCard__number">{reservations.length}</div>
                <div className="statCard__label">Total de résevations</div>
            </div>
            <div className="statCard">
                <span className="statCard__progression">+ 20%</span>
                <div className="statCard__number">354</div>
                <div className="statCard__label">Visiteurs</div>
            </div>
        </section>
    );
}