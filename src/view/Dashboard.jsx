import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../Context/AuthContext";

//pages
import { Login } from "../components/Login";

//components
import { DashboardStructure } from "../components/DashboardStructure";
import { Main } from "../pages/Main";
import { Reservations } from "../pages/Reservations";
import { NotFound } from "../pages/NotFound";

export const Dashboard = ({ page }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    fetch("https://benadjal.butmmi.o2switch.site/api_resa_expo/connexion/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pseudo: "admin",
        mdp: "admin",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.token);
        setToken(data.token);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const { user, handleLogin, handleLogout } = useContext(AuthContext);

  if (!user) {
    return <Login login={() => handleLogin()} />;
  }

  if (user) {
    if (page === "reservations") {
      return (
        <DashboardStructure>
          <Reservations />
        </DashboardStructure>
      );
    }
    if (page === "notfound") {
      return (
        <>
          <DashboardStructure>
            <NotFound />
          </DashboardStructure>
        </>
      );
    } else {
      return (
        <>
          <DashboardStructure>
            <Main />
          </DashboardStructure>
        </>
      );
    }
  }
};
