import React, { useEffect, useState, useRef } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import "./App.css"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import LoadingPage from "./components/LoadingPage"
import Dummy from "./components/Dummy"
import NewAbout from "./components/NewAbout"
gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState("dark")

  const profileImgRef = useRef() // Create a ref for #profileIMG

  // gsap
  let tl = new gsap.timeline()

  useEffect(() => {
    // setLoading(true)

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
        <LoadingPage timeline={tl} />
      ) : (
        <div
          className={`container-fluid bg-mode-${mode} text-mode-${
            mode === "light" ? "dark" : "light"
          }`}
        >
          <Header mode={mode} toggelMode={toggelMode} timeline={tl} />
          <Home mode={mode} timeline={tl} profileImgRef={profileImgRef} />
          {/* <Dummy mode={mode} /> */}
          <NewAbout mode={mode} timeline={tl} profileImgRef={profileImgRef} />
          {/* <About mode={mode} /> */}
          {/* <Services mode={mode} />
          <Contact mode={mode} />
          <Footer mode={mode} /> */}
        </div>
      )}
    </div>
  )
}
