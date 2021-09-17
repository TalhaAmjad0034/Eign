import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAlignCenter } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../../Assets/Logo.png";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const openHandler = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="Brand logo" />
      </div>
      <div onClick={openHandler} className="burger">
        <FaAlignCenter />
      </div>
      <ul className={`links ${openNav ? "active" : ""}`}>
        <li>
          <a href="#">Buy</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
        <li>
          <a href="#">Rent</a>
        </li>
        <li>
          <a href="#">Loan</a>
        </li>
        <li>
          <a href="#">The Experience</a>
        </li>
      </ul>
      <div className="login">
        <div className="dropdown">
          <span>
            English <RiArrowDropDownLine />
          </span>
          <div className="dropdown-content">
            <p>Arabic</p>
            <p>Urdu</p>
          </div>
        </div>
        <span className="lgn">Login</span>
      </div>
    </div>
  );
};

export default Navbar;
