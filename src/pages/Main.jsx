import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";
import { getCookie } from "../utils/cookieUtils";

import { Loader } from "../components/Loader";
import { StatsResa } from "../components/StatsResa";
import { ResaTable } from "../components/ResaTable";

export const Main = () => {
  const { user, isLogged } = useContext(AuthContext);

  useEffect(() => {
    isLogged();
  }, []);

  const [loaded, setLoaded] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [countReservationsThisWeek, setCountReservationsThisWeek] = useState(0);
  const [countReservationsLastWeek, setCountReservationsLastWeek] = useState(0);

  const fetchResa = () => {
    fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/reservations/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        all: true,
        token: getCookie("token"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setReservations(data.reservations);
        setCountReservationsThisWeek(data.countReservationsThisWeek);
        setCountReservationsLastWeek(data.countReservationsLastWeek);
        setTimeout(() => {
          setLoaded(true);
        }, 200);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchResa();
  }, []);

  return (
    <>
      {!loaded && <Loader />}
      <h1>Bienvenue {user.pseudo}</h1>
      <StatsResa
        reservations={reservations}
        countReservationsThisWeek={countReservationsThisWeek}
        countReservationsLastWeek={countReservationsLastWeek}
      />
      <ResaTable reservations={reservations} fetchResa={() => fetchResa()} />
    </>
  );
};
