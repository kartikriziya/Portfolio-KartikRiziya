import React, { Component } from "react"
import companyLogo from "../assets/bootstrap-logo.svg"
import PropTypes from "prop-types"

export class Header extends Component {
  // static defaultProps = {
  //   mode: "light",
  // }
  // static propTypes = {
  //   mode: PropTypes.string,
  // }

  // constructor() {
  //   super()
  // }
  render() {
    return (
      <div>
        <nav
          className={`navbar sticky-top navbar-expand-md navbar-dark bg-${this.props.mode}`}
        >
          <div className="container">
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
            <a className="navbar-brand" href="#">
              <img
                src={companyLogo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </ul>

              {/* toggleMode Switch */}
              <div className="form-check form-switch text-light">
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
                  Enable DarkMode
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
