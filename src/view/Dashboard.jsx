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

  const { user, handleLogin, handleLogout } = useContext(AuthContext);

  if (!user) {
    return (
      <Login login={() => handleLogin()} />
    );
  }

  if (user) {
    if (page === "reservations") {
      return (
        <DashboardStructure>
          <Reservations />
        </DashboardStructure>
      );
    } if (page === "notfound") {
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
}
