import React from "react";
import {  FaInstagramSquare, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
      @vanshdeepCreatives all rights reserved
      </p>
      <div className="footer-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaInstagramSquare />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
