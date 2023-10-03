import React, { Component } from "react"
import companyLogo from "../assets/bootstrap-logo.svg"

import "./Header.css"

export class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className={`navbar fixed-top navbar-expand-md navbar-${this.props.mode} bg-${this.props.mode}`}
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              {/* <img
                src={companyLogo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              /> */}
              <b>
                Portfo<span style={{ color: "#ff7b00" }}>lio</span>.
              </b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a className="nav-link active " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link  " aria-current="page" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link  "
                    aria-current="page"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link  " aria-current="page" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>

              {/* toggleMode Switch */}
              <div
                className={`form-check form-switch text-mode-${
                  this.props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  onClick={this.props.toggelMode}
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable LightMode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
