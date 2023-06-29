import React from "react";
import Logo from "../images/Logo.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={Logo} alt="logo" width="100px" />
      </div>
      <div className="d-flex">
        <div className="col-md-6">
          <ul className="nav flex-column">
            <li className="nav-items mb-2">News</li>
            <li className="nav-items mb-2">Parents Guide</li>
            <li className="nav-items mb-2">Customer Service</li>
            <li className="nav-items mb-2">About our Company</li>
            <li className="nav-items mb-2">Careers</li>
            <li className="nav-items mb-2">Press Site</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="nav flex-row">
            <li>
              <i class="bi bi-facebook"></i>
            </li>
            <li>
              <i class="bi bi-youtube"></i>
            </li>
            <li>
              <i class="bi bi-twitter"></i>
            </li>
            <li>
              <i class="bi bi-instagram"></i>
            </li>
            <li>
              <i class="bi bi-pinterest"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
