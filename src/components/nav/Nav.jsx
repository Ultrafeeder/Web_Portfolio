import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/JakariStratton-logos.jpeg";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header>
        <section className="nav-section">
          <img src={Logo} alt="logo" />
        </section>
        <section className="nav-slogan">
          <h1 className="portfolio">
            <span>Jakari Stratton</span>
          </h1>
        </section>
        <section className="nav-menu">
          <span onClick={() => setNavbarOpen(true)}>Menu</span>
        </section>
        <section className={`nav-section-side ${navbarOpen ? "show" : ""}`}>
          <section className="close-btn">
            <img
              onClick={() => setNavbarOpen(false)}
              src={require("../../assets/x.png")}
              alt=""
            />
          </section>
          <ul>
            <li>
              <Link
                onClick={() => setNavbarOpen(false)}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNavbarOpen(false)}
                className="nav-link"
                to="/gateway"
              >
                Gateway
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNavbarOpen(false)}
                className="nav-link"
                to="/ecommerce"
              >
                Ecommerce
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNavbarOpen(false)}
                className="nav-link"
                to="/ecommerce_react"
              >
                Eccomerce React
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNavbarOpen(false)}
                className="nav-link"
                to="/code_for_justice"
              >
                Code for Justice Hackathon
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNavbarOpen(false)}
                className="nav-link"
                to="/tesla_clone"
              >
                Tesla Clone
              </Link>
            </li>
          </ul>
        </section>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
