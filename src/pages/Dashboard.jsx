import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../Context/AuthContext";

//pages
import { Login } from "../components/Login";

//components
import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Dashboard/Main";
import { Reservations } from "../components/Dashboard/Reservations";
import { Statistiques } from "../components/Dashboard/Statistiques";
import { NotFound } from "../components/Dashboard/NotFound";

export const Dashboard = ({ page }) => {

  const { user, handleLogin, handleLogout } = useContext(AuthContext);

  if (!user) {
    return (
      <Login login={() => handleLogin()} />
    );
  }

  if (user) {
    if (page === "reservation") {
      return (
        <>
          <div className="container-all">
            <Sidebar />
            <main>
              <Reservations />
            </main>
          </div>
        </>
      );
    } if (page === "statistiques") {
      return (
        <>
          <div className="container-all">
            <Sidebar />
            <main>
              <Statistiques />
            </main>
          </div>
        </>
      );
    } if (page === "notfound") {
      return (
        <>
          <div className="container-all">
            <Sidebar />
            <main>
              <NotFound />
            </main>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="container-all">
            <Sidebar />
            <main>
              <Main />
            </main>
          </div>
        </>
      );
    }
  }
}
