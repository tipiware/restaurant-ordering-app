import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about">
        <h2>About Policy</h2>
        <p>
        We've been serving up warmth and flavor to our community since 2019.
        </p>
      </div>
      <div className="header">
        <h2>Header</h2>
        <p><Link to="/disclaimer">Disclaimer</Link></p>
      </div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          <b>Address:</b> Penang, Malaysia{" "}
        </p>
        <p>
          <b>Phone No:</b> +60123456789
        </p>
      </div>
    </div>
  );
};

export default Footer;
