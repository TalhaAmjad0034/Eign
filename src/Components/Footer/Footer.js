import React from "react";

import logo from "../../Assets/Logo.png";
import fb from "../../Assets/facebook.png";
import insta from "../../Assets/instagram.png";
import link from "../../Assets/link.png";
import tube from "../../Assets/youtube.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footertop">
        <div className="Logo">
          <img src={logo} alt="Brand logo" />
        </div>
        <span className="headings">Waterloo, ON</span>
        <span className="grey linkss">
          2927 O Conner Street, Ocean <br /> Springs, Mississippi
        </span>
        <span className="grey linkss">P (555)619-202</span>
      </div>
      <div className="actuallinks">
        <ul>
          <li className="headings">Company</li>
          <li className="linkss">About Us</li>
          <li className="linkss">Careers</li>
        </ul>
        <ul>
          <li className="headings">Need Help?</li>
          <li className="linkss">Help Center </li>
          <li className="linkss">Report a Bug</li>
        </ul>
        <ul>
          <li className="headings">Contact Us</li>
          <li className="linkss">message@email.com</li>
        </ul>
        <ul>
          <li className="headings">Socail</li>
          <li className="socail-icons">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={link} alt="" />
            <img src={tube} alt="" />
          </li>
        </ul>
      </div>
      <div className="last-flex">
        <span>© 2020 Eign</span>
        <div>
          <span>Privacy </span>
          <span>Terms of Use</span> <span>Listings Quality Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
