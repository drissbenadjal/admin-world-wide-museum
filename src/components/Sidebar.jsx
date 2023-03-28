import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

//images
import logo from "../images/logo.svg";
import dashboard from "../images/icons/dashboard.svg";
import tickets from "../images/icons/tickets.svg";
import logout from "../images/icons/logout.svg";

export const Sidebar = () => {
  const location = useLocation();

  const sidebar = useRef(null);
  const burgerIcon = useRef(null);

  const handleBurger = () => {
    if (window.innerWidth > 768) return;
    sidebar.current.classList.toggle("active");
    burgerIcon.current.classList.toggle("active");
  };

  return (
    <>
      <nav className="sidebar" ref={sidebar}>
        <div className="top-nav">
          <Link to="/" className="link_logo">
            <img className="logo" src={logo} alt="dashboard" />
          </Link>
          <button onClick={handleBurger}>
            <div className="burgerIcon" ref={burgerIcon}></div>
            <span className="sr-only">Menu de navigation</span>
          </button>
        </div>
        <ul className="link-main">
          <li>
            <Link
              to={`/dashboard`}
              className={
                location.pathname === "/dashboard" || location.pathname === "/"
                  ? "active"
                  : ""
              }
              onClick={handleBurger}
            >
              <div className="link-content">
                <img src={dashboard} alt="" />
                <p>Dashboard</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to={`/dashboard/reservations`}
              className={
                location.pathname === "/dashboard/reservations" ? "active" : ""
              }
              onClick={handleBurger}
            >
              <div className="link-content">
                <img src={tickets} alt="" />
                <p>Réservations</p>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="link-secondary">
          <li>
            <Link to={`/logout`}>
              <div className="link-content">
                <img className="icons" src={logout} alt="" />
                <p>Déconnexion</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
