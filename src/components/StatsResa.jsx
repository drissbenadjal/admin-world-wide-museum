import React, { useState, useEffect } from "react";

export const StatsResa = ({ reservations }) => {
  const resa = reservations;
  const [reservationsThisWeek, setReservationsThisWeek] = useState([]);
  const [reservationsLastWeek, setReservationsLastWeek] = useState([]);
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    if (resa.length === 0) {
      return;
    }
    const now = new Date();
    // obtenir le lundi de la semaine en cours
    const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));

    // obtenir le dimanche de la semaine en cours
    const sunday = new Date(now.setDate(now.getDate() - now.getDay() + 7));

    // filtrer les réservations de la semaine en cours
    resa.filter((r) => {
      const resaDate = new Date(r.date_reservation);
      if (resaDate >= monday && resaDate <= sunday) {
        setReservationsThisWeek((reservationsThisWeek) => [
          ...reservationsThisWeek,
          r,
        ]);
      }
    });

    const lastMonday = new Date(
      now.setDate(now.getDate() - now.getDay() + 1 - 7)
    );
    const lastSunday = new Date(
      now.setDate(now.getDate() - now.getDay() + 7 - 7)
    );
    // obtenir le nombre de reservation de la semainen dernière
    resa.filter((r) => {
      const resaDate = new Date(r.date_reservation);
      if (resaDate >= lastMonday && resaDate <= lastSunday) {
        setReservationsLastWeek((reservationsLastWeek) => [
          ...reservationsLastWeek,
          r,
        ]);
      }
    });
  }, [resa]);

  useEffect(() => {
    setDifference(reservationsThisWeek.length - reservationsLastWeek.length);
    //   const pourcentage = (difference / reservationsLastWeek.length) * 100;
    console.log(difference);
    // setPourcentage(pourcentage);
  }, [reservationsThisWeek, reservationsLastWeek]);

  return (
    <section className="statCards">
      <div className="statCard">
        <span className="statCard__progression">{"+ " + difference}</span>
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
};
