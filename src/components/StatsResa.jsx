import React, { useState, useEffect } from "react";

export const StatsResa = ({ reservations }) => {

    const [reservationsThisWeek, setReservationsThisWeek] = useState([]);
    const [reservationsLastWeek, setReservationsLastWeek] = useState([]);
    const [pourcentage, setPourcentage] = useState(0);

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

        const lastMonday = new Date(now.setDate(now.getDate() - now.getDay() - 6));
        const lastSunday = new Date(now.setDate(now.getDate() - now.getDay() + 0));

        reservations.filter((resa) => {
            const resaDate = new Date(resa.date_reservation);
            if (resaDate >= lastMonday && resaDate <= lastSunday) {
                setReservationsLastWeek((reservationsLastWeek) => [...reservationsLastWeek, resa]);
            }
        });
    }, [reservations]);

    useEffect(() => {
        //calculer le pourcentage d'augmentation ou de diminution des réservations
        const pourcentage = Math.round((reservationsThisWeek.length - reservationsLastWeek.length) / reservationsLastWeek.length * 100);
        //si c'est positif, on affiche un "+" devant le pourcentage et si c'est négatif, on affiche un "-" devant le pourcentage
        //si c'est NaN ou infinty on met 100%
        if (isNaN(pourcentage) || !isFinite(pourcentage)) {
            setPourcentage("+ " + 100);
        } else {
            if (pourcentage > 0) {
                setPourcentage("+ " + pourcentage);
            } else {
                setPourcentage(pourcentage);
            }
        }
    }, [reservationsThisWeek, reservationsLastWeek]);


    return (
        <section className="statCards">
            <div className="statCard">
                <span className="statCard__progression">
                    {
                        pourcentage + "%"
                    }
                </span>
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
                <div className="statCard__label">Visiteurs cette semaine</div>
            </div>
        </section>
    );
}