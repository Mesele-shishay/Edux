"use client";

import Link from "next/link";
import { useState } from "react";



function Header() {
  const [collapse, setCollapse] = useState("collapse");
  const [openNavBar, setOpenNavBar] = useState(false);
  const navBar = (isOpenNavBar: boolean) => {
    if (!isOpenNavBar) {
      setOpenNavBar(true);
      setCollapse("");
    } else {
      setOpenNavBar(false);
      setCollapse("collapse");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" >
      <div className="container">
        <a className="navbar-brand" href="{{ url('home') }}">
          <img src="favicon.png" width="30px" />
          {/* {{ config('app.name') }} */}
        </a>
        <button
          onClick={() => {
          navBar(openNavBar);
          }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className={collapse + " navbar-collapse"} id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0 pb-sm-0">
            <li className="nav-item">
              <Link className="nav-link" href={"dashboard"}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
