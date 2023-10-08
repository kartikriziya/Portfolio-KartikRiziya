import React, { useEffect, useRef } from "react"

import Kartik_ProfileIMG from "../assets/Kartik_ProfileIMG.png"

import "./Home.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Home(props) {
  let tl = props.timeline
  let home = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from("#home", {
        scrollTrigger: {
          // markers: true,
          trigger: "#BTN",
          start: "top top",
          end: "top center",
          onEnter() {
            document
              .querySelector("#headerNavbarContainer")
              .classList.remove("container")
            document
              .querySelector("#headerNavbarContainer")
              .classList.add("container-fluid")
          },
          onLeaveBack() {
            document
              .querySelector("#headerNavbarContainer")
              .classList.remove("container-fluid")
            document
              .querySelector("#headerNavbarContainer")
              .classList.add("container")
          },
          scrub: true,
        },
      })
      tl.from("#homeIntroText1", { opacity: 0, x: "-100", duration: 0.5 })
        .from("#homeIntroText2", { opacity: 0, x: "-100", duration: 0.7 })
        .from("#homeIntroText3", { opacity: 0, x: "-100", duration: 0.6 })
        .from("#BTN", {
          opacity: 0,
          y: "100",
          duration: 0.5,
        })
        .from(".Card", { opacity: 0, y: 1200, ease: props.ease, duration: 0.8 })
        .from("#profileIMG", {
          opacity: 0,
          scale: 1.2,
          ease: props.ease,
          duration: 1,
        })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div>
      <div className="container-fluid" id="home" ref={(el) => (home = el)}>
        <div className="row">
          <div className="col-md-6 ps-5" id="homeIntro">
            <div className="ms-5 ps-5" id="homeIntroText">
              <h4 id="homeIntroText1">Hello, my name is </h4>
              <h1 id="homeIntroText2">Kartik Riziya</h1>
              <h2 id="homeIntroText3">
                And I'm a{" "}
                <span style={{ color: "#ff7b00" }}>
                  Developer Freelancer Designer
                </span>
              </h2>
              <button className="btn" id="BTN">
                <a href="#contact" id="BTN_Link">
                  Hire me
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6 mt-5 p-5" id="homeProfile">
            <div className={`Card profileCard-${props.mode} mt-5`}>
              <img
                src={Kartik_ProfileIMG}
                alt="profileIMG"
                className="responsive mt-5"
                id="profileIMG"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
