import React, { Component, useEffect, useRef, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

import "./App.css"
import { gsap, Power3 } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [mode, setMode] = useState("dark")
  const [headerBG, setHeaderBG] = useState("#ff7b00")

  let appContainer = useRef(null)

  // gsap
  let tl = new gsap.timeline()
  let ease = Power3.easeOut()

  useEffect(() => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#f8f9fa"
    } else {
      document.body.style.backgroundColor = "#212529"
    }
  })

  // toggelMode function
  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  const changeHeaderBG = () => {
    if (headerBG === null) {
      setHeaderBG("#ff7b00")
    } else {
      setHeaderBG(null)
    }
  }

  return (
    <div>
      <div
        className={`container-fluid bg-mode-${mode} text-mode-${
          mode === "light" ? "dark" : "light"
        }`}
        id="appContainer"
        ref={(el) => (appContainer = el)}
      >
        <Header
          mode={mode}
          toggelMode={toggelMode}
          timeline={tl}
          ease={ease}
          headerBG={headerBG}
        />
        <Home
          mode={mode}
          timeline={tl}
          ease={ease}
          headerBG={headerBG}
          changeHeaderBG={changeHeaderBG}
        />
        <About mode={mode} timeline={tl} ease={ease} />
        <Services mode={mode} timeline={tl} ease={ease} />
        <Contact mode={mode} timeline={tl} ease={ease} />
      </div>
    </div>
  )
}
