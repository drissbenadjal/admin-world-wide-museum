import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../Context/AuthContext";

//pages
import { Login } from "../pages/Login";

//components
import { DashboardStructure } from "../components/DashboardStructure";
import { Main } from "../pages/Main";
import { Reservations } from "../pages/Reservations";
import { NotFound } from "../pages/NotFound";
import { Loader } from "../components/Loader";

export const Dashboard = ({ page }) => {

  const { loged, handleLogin, loadedAuth } = useContext(AuthContext);

  if (!loadedAuth) {
    return (
      <Loader />
    )
  }

  if (!loged) {
    if (page === "notfound") {
      return (
        <>
          <NotFound />
        </>
      );
    } else {
      return (
        <Login login={(pseudo, password) => handleLogin(pseudo, password)} />
      )
    }
  }

  if (loged) {
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
