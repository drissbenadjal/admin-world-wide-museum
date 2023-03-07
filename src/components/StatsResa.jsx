import React, { useState, useEffect } from "react";

export const StatsResa = ({ reservations }) => {
  const resa = reservations;
  const [reservationsThisWeek, setReservationsThisWeek] = useState([]);
  const [reservationsLastWeek, setReservationsLastWeek] = useState([]);
  const [pourcentage, setPourcentage] = useState(0);

  useEffect(() => {
    if (resa.length === 0) {
      return;
    }
    const now = new Date();
    // obtenir le lundi de la semaine en cours
    const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));
    // obtenir le dimanche de la semaine en cours
    const sunday = new Date(now.setDate(now.getDate() - now.getDay() + 7));

    // obtenir le nombre de reservation de la semainen dernière

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
  }, [resa]);

  useEffect(() => {
    //faire la meme chose pour la semaine dernière mais le mois change donc il faut le prendre en compte
    if (resa.length === 0) {
      return;
    }
    const now = new Date();

    // obtenir le lundi de la semaine en cours
    const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));
    // obtenir le dimanche de la semaine en cours
    const sunday = new Date(now.setDate(now.getDate() - now.getDay() + 7));

    const lastMonday = monday - 604800000;
    const lastSunday = sunday - 604800000;
    // obtenir le nombre de reservation de la semainen dernière

    // filtrer les réservations de la semaine en cours
    resa.filter((r) => {
      const resaDate = new Date(r.date_reservation);
      if (resaDate >= lastMonday && resaDate <= lastSunday) {
        setReservationsLastWeek((reservationsLastWeek) => [
          ...reservationsLastWeek,
          r,
        ]);
      }
    });
  }, [reservationsThisWeek]);

  useEffect(() => {
    const diff = reservationsThisWeek.length - reservationsLastWeek.length;
    const pourcentage = Math.round((diff / reservationsLastWeek.length) * 100);
    setPourcentage(pourcentage);
  }, [reservationsThisWeek, reservationsLastWeek]);

  return (
    <section className="statCards">
      <div className="statCard">
        <span className="statCard__progression">
          {pourcentage > 0 ? "+ " + pourcentage + " %" : pourcentage + " %"}
        </span>
        <div className="statCard__number">{reservationsThisWeek.length}</div>
        <div className="statCard__label">Réservations cette semaine</div>
      </div>
      <div className="statCard">
        <div className="statCard__number">{reservations.length}</div>
        <div className="statCard__label">Total de réservations</div>
      </div>
      <div className="statCard">
        <div className="statCard__number">354</div>
        <div className="statCard__label">Visiteurs cette semaine</div>
      </div>
    </section>
  );
};
