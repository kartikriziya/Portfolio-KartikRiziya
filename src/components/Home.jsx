import React, { useEffect, useRef, useState } from "react"

// import Kartik_ProfileIMG from "../assets/Kartik_ProfileIMG1.png"
import Kartik_ProfileIMG from "../assets/Kartik_ProfileIMG1.1.png"

import "./Home.css"
import Typed from "typed.js"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" // Import the ScrollTrigger plugin
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Home(props) {
  let tl = props.timeline
  const homeContainer = useRef()

  useEffect(() => {
    let typed = new Typed("#homeIntroText3 #specifications h2 span", {
      strings: ["Developer", "Freelancer", "Designer", "Programmer"],
      typeSpeed: 140,
      backSpeed: 70,
      loop: true,
    })

    // let ctx = gsap.context(() => {
    //   tl.fromTo(
    //     "#homeIntroText1",
    //     { opacity: 0, x: "-100" },
    //     { opacity: 0, x: "-100", duration: 0.3 }
    //   )
    //     .fromTo(
    //       "#homeIntroText2",
    //       { opacity: 0, x: "-100" },
    //       { opacity: 0, x: "-100", duration: 0.5 }
    //     )
    //     .fromTo(
    //       "#homeIntroText3",
    //       { opacity: 0, x: "-100" },
    //       { opacity: 0, x: "-100", duration: 0.4 }
    //     )
    //     .fromTo(
    //       ".specialBTN",
    //       { opacity: 0, y: "100" },
    //       {
    //         opacity: 1,
    //         y: "0",
    //         duration: 0.5,
    //       },
    //       "together1"
    //     )
    //     .fromTo(
    //       ".Card",
    //       { opacity: 0, y: 1200 },
    //       { opacity: 1, y: 0, ease: props.ease, duration: 0.8 },
    //       "together1"
    //     )
    //     .from(
    //       "#profileIMG",
    //       {
    //         opacity: 0,
    //         scale: 1.2,
    //         ease: props.ease,
    //         duration: 0.5,
    //       },
    //       "together1"
    //     )
    // })
    return () => {
      typed.destroy()
      // ctx.revert()
    }
  }, [])

  useGSAP(
    () => {
      tl &&
        tl
          .from(
            "#homeIntroText1",
            { opacity: 0, x: "-100", duration: 0.3 },
            "withhomeIntroText1"
          )
          .from("#homeIntroText2", { opacity: 0, x: "-100", duration: 0.5 })
          .from("#homeIntroText3", { opacity: 0, x: "-100", duration: 0.4 })
          .from(
            ".specialBTN",
            {
              opacity: 0,
              x: "-100",
              duration: 0.5,
            },
            "withBTN"
          )
          .from(
            ".Card",
            {
              opacity: 0,
              duration: 0.3,
              ease: "power1.out",
              onStart: () => {
                // Set initial scale without easing
                gsap.set(".Card", {
                  x: 1200,
                })
              },
              onComplete: () => {
                // Animate back to original scale with easing
                gsap.to(".Card", {
                  x: 0,
                })
              },
            },
            "withhomeIntroText1"
          )
          .from(
            "#profileIMG",
            {
              opacity: 0,
              ease: "power1.out",
              duration: 3.5,
            },
            "withBTN"
          )
    },
    {
      scope: homeContainer,
      revertOnUpdate: false,
    }
  )

  return (
    <div ref={homeContainer}>
      <div className="container-fluid" id="home">
        <div className="row">
          <div className="col-md-6 ps-sm-5" id="homeIntro">
            <div className="ms-5 ps-sm-5" id="homeIntroText">
              <h4 id="homeIntroText1">Hello, my name is </h4>
              <h1 id="homeIntroText2">Kartik Riziya</h1>
              <div id="homeIntroText3">
                <h2>And I'm a</h2>
                <div id="specifications">
                  <h2 className="ms-2">
                    <span style={{ color: "#ff7b00" }}>
                      {/* {activeSpecification} */}
                    </span>
                  </h2>
                </div>
              </div>

              <button className="btn specialBTN">
                <a href="#contact" className="BTN_Link">
                  Hire me
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6 mt-sm-5 p-sm-5" id="homeProfile">
            <div className={`Card profileCard-${props.mode} mt-5`}>
              <img
                src={Kartik_ProfileIMG}
                alt="profileIMG"
                className="responsive"
                id="profileIMG"
                ref={props.profileImgRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
