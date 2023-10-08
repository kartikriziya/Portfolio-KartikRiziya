import React, { Component, useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

import "./App.css"
import { gsap, Power3 } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default function App() {
  const [mode, setMode] = useState("dark")

  useEffect(() => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#f8f9fa"
    } else {
      document.body.style.backgroundColor = "#212529"
    }
  })

  // gsap
  let tl = new gsap.timeline()
  let ease = Power3.easeOut()

  // toggelMode function
  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }
  return (
    <div>
      <div
        className={`container-fluid bg-mode-${mode} text-mode-${
          mode === "light" ? "dark" : "light"
        }`}
        id="appContainer"
      >
        <Header mode={mode} toggelMode={toggelMode} timeline={tl} ease={ease} />
        <Home mode={mode} timeline={tl} ease={ease} />
        <About mode={mode} timeline={tl} ease={ease} />
        <Services mode={mode} timeline={tl} ease={ease} />
        <Contact mode={mode} timeline={tl} ease={ease} />
      </div>
    </div>
  )
}
