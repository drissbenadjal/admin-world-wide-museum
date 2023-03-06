import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Loader } from "../components/Loader";
import { StatsResa } from "../components/StatsResa";
import { ResaTable } from "../components/ResaTable";

export const Main = () => {

    const [loaded, setLoaded] = useState(false);
    const [reservations, setReservations] = useState([]);

    const fetchResa = async () => {
        fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/reservations/",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => response.json())
            .then((data) => {
                setReservations(data);
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
            {
                !loaded && <Loader />
            }
            <h1>Bienvenue admin</h1>
            <StatsResa reservations={reservations} />
            <ResaTable reservations={reservations} />
        </>
    );
}