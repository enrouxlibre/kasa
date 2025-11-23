import React from "react";
import "./Header.scss";
import HeaderLogo from "/images/header_logo.png";
import HeaderLogoSmall from "/images/header_logo_small.png";
import { useLocation } from "react-router";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <img
        srcSet={`${HeaderLogoSmall} 375w, ${HeaderLogo} 1440w`}
        sizes="(max-width: 600px) 375px, 1440px"
        src={HeaderLogo}
        alt="Kasa Logo"
        className="header-logo-large"
      />
      <nav>
        <ul>
          <li>
            <a className={location.pathname === "/" ? "active" : ""} href="/">
              Accueil
            </a>
          </li>
          <li>
            <a
              className={location.pathname === "/about" ? "active" : ""}
              href="/about"
            >
              A Propos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
