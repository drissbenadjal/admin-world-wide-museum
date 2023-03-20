import React, { useState, useEffect } from "react";
import { getCookie } from "../utils/cookieUtils";
import { StatsCard } from "./StatsCard";

export const StatsResa = ({
  reservations,
  countReservationsThisWeek,
  countReservationsLastWeek,
}) => {

  const [pourcentage, setPourcentage] = useState(0);
  const [visiteurs, setVisiteurs] = useState(0);

  const fetchPresences = async () => {
    fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/visiteurs/", {
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
  };

  useEffect(() => {
    fetchPresences();
  }, []);

  useEffect(() => {
    //faire le taux d'evolution
    let pourcentage = Math.round(
      ((countReservationsThisWeek / countReservationsLastWeek) - 1) * 100
    );
    if (isNaN(pourcentage)) {
      pourcentage = 0;
    }
    if (pourcentage === Infinity) {
      pourcentage = 100;
    }
    setPourcentage(pourcentage);
  }, [countReservationsThisWeek, countReservationsLastWeek]);

  return (
    <section className="statCards">
      <StatsCard
        title="Réservations cette semaine"
        value={countReservationsThisWeek}
        type="pourcentage"
        pourcentage={pourcentage}
      />
      <StatsCard title="Total de réservations" value={reservations.length} />
      <StatsCard
        title="Visiteurs cette semaine"
        value={visiteurs.countPresence}
      />
    </section>
  );
};
