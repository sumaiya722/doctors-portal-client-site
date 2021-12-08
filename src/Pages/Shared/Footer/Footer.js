import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="text-white">
      <>
      <div className="py-4 gradient">
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/appointment">Appointment</NavLink>
                </li>
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-twitter"></i>
              </ul>
           
      </div>
      
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Reserved by Drone Explore company in
        2021
      </p>
    </>
  );
};

export default Footer;