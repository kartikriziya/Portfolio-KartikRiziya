import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import "./App.css"
import { gsap, Power3 } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import LoadingPage from "./components/LoadingPage"
gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState("dark")

  // gsap
  let tl = new gsap.timeline()
  let ease = Power3.easeOut()

  useEffect(() => {
    setLoading(true)

    if (mode === "light") {
      document.body.style.backgroundColor = "#f8f9fa"
    } else {
      document.body.style.backgroundColor = "#212529"
    }

    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

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
      {loading ? (
        <LoadingPage timeline={tl} ease={ease} />
      ) : (
        <div
          className={`container-fluid bg-mode-${mode} text-mode-${
            mode === "light" ? "dark" : "light"
          }`}
        >
          <Header
            mode={mode}
            toggelMode={toggelMode}
            timeline={tl}
            ease={ease}
          />
          <Home mode={mode} timeline={tl} ease={ease} />
          <About mode={mode} ease={ease} />
          <Services mode={mode} ease={ease} />
          <Contact mode={mode} ease={ease} />
          <Footer mode={mode} ease={ease} />
        </div>
      )}
    </div>
  )
}
