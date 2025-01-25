import React from "react";
import { nav } from "../../Data/data";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { NavLink } from "react-router-dom";
function Header() {
  console.log(nav);
  return (
    <header>
      <nav className="navbar position-relative navbar-expand-lg h-100">
        <div className="container h-100">
          <div className="logo d-block  h-100">
            <img className="h-100" src={logo} alt="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse w-100  py-3 " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
              {nav.map((list, index) => (
                <li key={index + 1} className="nav-item text-sm-center">
                  <NavLink className="nav-link text-black active" to={list.path}>
                    {list.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center ms-sm-0 gap-2 ms-lg-4 justify-content-sm-center justify-content-lg-center ">
              <h6 className="m-0">
                <span className="fs-6">2</span> My List
              </h6>
              <button className="btn btn-success ">
                <i className="fa-solid fa-right-to-bracket"></i> Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
