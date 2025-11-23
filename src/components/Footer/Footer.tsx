import React from "react";
import FooterLogo from "/images/footer_logo.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <img src={FooterLogo} alt="Kasa Footer Logo" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}
