import React, { useState, useEffect, useRef } from "react"

import "./Header.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Header(props) {
  let tl = props.timeline
  const headerNavbarContainer = useRef()

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     tl.from(".navbar-brand", { opacity: 0, x: "-100", duration: 0.5 }).from(
  //       ".nav-item, #toggleModeSwitch",
  //       {
  //         opacity: 0,
  //         y: "-100",
  //         stagger: { amount: 0.5 },
  //         ease: props.ease,
  //       }
  //     )
  //   })
  //   return () => ctx.revert()
  // }, [])

  useGSAP(
    () => {
      tl &&
        tl
          .from(".navbar-brand", {
            opacity: 0,
            x: "-100",
            delay: 1,
            duration: 0.5,
            ease: "power1.out",
          })
          .from(".nav-item, #toggleModeSwitch", {
            opacity: 0,
            y: "-100",
            stagger: { amount: 0.5 },
            ease: "power1.out",
          })
    },
    { scope: headerNavbarContainer }
  )

  const updateActiveLink = (event) => {
    const allLinks = document.querySelectorAll(".nav-link")
    allLinks.forEach((link) => link.classList.remove("active"))

    document.querySelector("#" + event.currentTarget.id).classList.add("active")
  }

  return (
    <div ref={headerNavbarContainer}>
      <nav
        className={`navbar fixed-top navbar-expand-md navbar-${props.mode} bg-${props.mode} headerNavbar`}
        id="headerNavbar"
      >
        <div className="container" id="headerNavbar">
          <a className="navbar-brand" href="#">
            <b>
              Portfo
              <span id="logoEnd" style={{ color: "#ff7b00" }}>
                lio
              </span>
              .
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 headerUL">
              <li className="nav-item ">
                <a
                  className="nav-link active "
                  id="homeLink"
                  aria-current="page"
                  href="#"
                  onClick={updateActiveLink}
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link  "
                  id="aboutLink"
                  aria-current="page"
                  href="#about"
                  onClick={updateActiveLink}
                >
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link  "
                  id="servicesLink"
                  aria-current="page"
                  href="#services"
                  onClick={updateActiveLink}
                >
                  Services
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link  "
                  id="contactLink"
                  aria-current="page"
                  href="#contact"
                  onClick={updateActiveLink}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* toggleMode Switch */}
            <div
              className={`form-check form-switch text-mode-${
                props.mode === "light" ? "dark" : "light"
              }`}
              id="toggleModeSwitch"
            >
              <input
                className="form-check-input"
                onClick={props.toggelMode}
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
