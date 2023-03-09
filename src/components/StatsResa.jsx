import React, { useState, useEffect } from "react";
import { getCookie } from "../utils/cookieUtils";

export const StatsResa = ({ reservations }) => {
  const resa = reservations;
  const [reservationsThisWeek, setReservationsThisWeek] = useState([]);
  const [reservationsLastWeek, setReservationsLastWeek] = useState([]);
  const [pourcentage, setPourcentage] = useState(0);
  const [visiteurs, setVisiteurs] = useState([]);
  const [visiteursThisWeek, setVisiteursThisWeek] = useState([]);
  const [visiteursNbThisWeek, setVisiteursNbThisWeek] = useState(0);

  useEffect(() => {
    fetch('https://benadjal.butmmi.o2switch.site/api_resa_expo/visiteurs/',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: getCookie("token"),
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        setVisiteurs(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    //recuperer les "place_reservation" dans visiteurs de cette semaine par rapport a "date_reservation"
    if (visiteurs.length === 0) {
      return;
    }
    const now = new Date();
    // obtenir le lundi de la semaine en cours
    const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));
    // obtenir le dimanche de la semaine en cours
    const sunday = new Date(now.setDate(now.getDate() - now.getDay() + 7));

    visiteurs.filter((v) => {
      const visiteurDate = new Date(v.date_reservation);
      //si c'est cette semaine prendre prendre les places et les additionner
      if (visiteurDate >= monday && visiteurDate <= sunday) {
        setVisiteursThisWeek((visiteursThisWeek) => [
          ...visiteursThisWeek,
          v,
        ]);
      }
    });
  }, [visiteurs]);

  useEffect(() => {
    //additionner les places de cette semaine
    if (visiteursThisWeek.length === 0) {
      return;
    }
    let total = 0;
    visiteursThisWeek.forEach((v) => {
      total = total + parseInt(v.place_reservation);
    });
    setVisiteursNbThisWeek(total);
  }, [visiteursThisWeek]);



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
  }, [reservations]);

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
    let pourcentage = Math.round((diff / reservationsLastWeek.length) * 100);
    if (isNaN(pourcentage)) {
      pourcentage = 0;
    }
    if (Infinity === pourcentage) {
      pourcentage = 100;
    }
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
        <div className="statCard__number">
          {visiteursNbThisWeek}
        </div>
        <div className="statCard__label">Visiteurs cette semaine</div>
      </div>
    </section>
  );
};
