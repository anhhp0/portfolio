import React from "react";

import "./footer.styles.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="footer__title">Phuc Anh Ha</p>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/imphucanh/"
          className="footer__icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/anhhp0?tab=repositories"
          className="footer__icon"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p>&#169; {new Date().getFullYear()} copyright Phuc Anh Ha</p>
    </footer>
  );
};

export default Footer;
