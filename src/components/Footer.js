import React from "react";
import logoWhite from "../assets/logoWhite.svg";
import "../style/Footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logoFooter">
        <img src={logoWhite} alt="Logo Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
export default Footer;
