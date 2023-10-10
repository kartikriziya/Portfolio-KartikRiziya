import React, { useEffect, useRef, useState } from "react"

import Kartik_ProfileIMG from "../assets/Kartik_ProfileIMG.png"

import "./Home.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Home(props) {
  const [activeSpecification, setActiveSpecification] = useState("Programmer")

  let tl = props.timeline
  let home = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from("#homeIntroText1", { opacity: 0, x: "-100", duration: 0.5 })
        .from("#homeIntroText2", { opacity: 0, x: "-100", duration: 0.7 })
        .from("#homeIntroText3", { opacity: 0, x: "-100", duration: 0.6 })
        .from(".specialBTN", {
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

      let tl2 = new gsap.timeline({
        scrollTrigger: {
          trigger: home,
          scroller: "body",
          markers: true,
          start: "top 0",
          end: "top -200%",
          scrub: 3,
          pin: true,
        },
      })
      tl2.to("#homeIntroText3 #specification1", {
        opacity: 0,
        transform: "translateX(100%)",
        onUpdate: () => {
          setActiveSpecification("Programmer")
        },
        onComplete: () => {
          setActiveSpecification("Freelancer")
        },
      })
      tl2.fromTo(
        "#homeIntroText3 #specification1",
        { opacity: 1, x: "0" },
        {
          opacity: 0,
          transform: "translateX(100%)",
          onUpdate: () => {
            setActiveSpecification("Freelancer")
          },
          onComplete: () => {
            setActiveSpecification("Designer")
          },
        }
      )
      tl2.fromTo(
        "#homeIntroText3 #specification1",
        { opacity: 1, x: "0" },
        {
          opacity: 0,
          transform: "translateX(100%)",
          onUpdate: () => {
            setActiveSpecification("Designer")
          },
          onComplete: () => {
            setActiveSpecification("Developer")
          },
        }
      )
      tl2.fromTo(
        "#homeIntroText3 #specification1",
        { opacity: 1, x: "0" },
        {
          opacity: 0,
          transform: "translateX(100%)",
          onUpdate: () => {
            setActiveSpecification("Developer")
          },
          onComplete: () => {
            setActiveSpecification("Developer")
          },
        }
      )
      // t2.fromTo(
      //   "#homeIntroText3 #specification2",
      //   { opacity: 0 },
      //   { opacity: 1 }
      // )
      // t2.to("#homeIntroText3 #specification2", { opacity: 0 })
      // t2.fromTo(
      //   "#homeIntroText3 #specification3",
      //   { opacity: 0 },
      //   { opacity: 1 }
      // )
      // .to("#homeIntroText3 #specification1", {
      //   opacity: 0,
      //   transform: "translateX(10%)",
      //   stagger: 0.2,
      //   scrollTrigger: {
      //     trigger: home,
      //     scroller: "body",
      //     markers: true,
      //     start: "top 0",
      //     end: "top -200%",
      //     scrub: 3,
      //     pin: true,
      //     pinSpacing: true,
      //   },
      // })
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
              <div id="homeIntroText3">
                <h2>And I'm a</h2>
                <div id="specification1">
                  <h2 className="ms-2">
                    <span style={{ color: "#ff7b00" }}>
                      {activeSpecification}
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
