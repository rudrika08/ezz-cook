// src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/recipebook">Recipe Book</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Recipe Book. All rights reserved.</p>
    </footer>
  );
};

export default Footer;