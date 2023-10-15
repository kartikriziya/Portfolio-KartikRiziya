import React, { useEffect, useRef, useState } from "react"
import Development from "./Development"

import Experience from "./Experience"
import Education from "./Education"

import Kartik_ProfileIMG2 from "../assets/Kartik_ProfileIMG2.png"
import CV from "../assets/Kartik_CV.pdf"

import "./About.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function About(props) {
  const [aboutIntroLink, setAboutIntroLink] = useState("skills")
  let tl = props.timeline
  let about = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(about, {
        scrollTrigger: {
          trigger: about,
          start: "top 30%",
          onEnter() {
            document
              .querySelector("#headerNavbar")
              .classList.remove("bg-" + props.mode)
            document.querySelector("#headerNavbar").style.backgroundColor =
              "#ff7b00"
            props.mode === "dark"
              ? (document.querySelector("#logoEnd").style.color = "#212529")
              : (document.querySelector("#logoEnd").style.color = "#f8f9fa")
          },
          onLeaveBack() {
            document
              .querySelector("#headerNavbar")
              .classList.add("bg-" + props.mode)
            document.querySelector("#logoEnd").style.color = "#ff7b00"
          },
          scrub: true,
        },
      })

      let tlAbout = new gsap.timeline()
      tlAbout
        .from("#aboutHeading, #aboutIntroText, #myTab", {
          opacity: 0,
          textWeight: 0,
          // x: "2200%",
          // y: 500,
          // scaleX: 50,
          // scaleY: 50,
          scrollTrigger: {
            trigger: about,
            start: "top 0",
            scrub: 1,
          },
        })
        // .from("#aboutIntroText, #myTab", {
        //   opacity: 0,
        //   scrollTrigger: {
        //     trigger: about,
        //     start: "top 0",
        //     scrub: 1,
        //   },
        // })
        .from("#aboutIMG_CV, #myTabContent", {
          opacity: 0,
          y: 1200,
          ease: props.ease,
          duration: 1,
          scrollTrigger: {
            trigger: about,
            start: "top 0",
            scrub: 3,
          },
        })
        .from("#profileIMG2", {
          opacity: 0,
          scale: 1.2,
          ease: props.ease,
          duration: 1,
          delay: 1,
          scrollTrigger: {
            trigger: "#aboutProfile",
            start: "top 10%",
            scrub: 3,
          },
        })
        .from(".skill, .content", {
          opacity: 0,
          x: "100",
          stagger: { amount: 0.7 },
          ease: props.ease,
          duration: 0.7,
          scrollTrigger: {
            trigger: "#aboutIMG_CV",
            start: "top center",
            end: "+=100%",
            scrub: 5,
          },
        })

      ScrollTrigger.create({
        animation: tlAbout,
        trigger: about,
        scroller: "body",
        start: "top 0",
        end: "+=200%",
        pin: true,
      })
    })
    return () => ctx.revert()
  }, [props])

  const changeAboutIntroLink = (target) => {
    setAboutIntroLink(target)
  }

  return (
    <div>
      <div
        className="container-fluid pt-5"
        id="about"
        ref={(el) => (about = el)}
      >
        <div className="row pt-5">
          <div className="col-md-6 col-lg-5 col-xl-4 p-5" id="aboutProfile">
            <div id="aboutIMG_CV">
              <div
                className={`profileCard-${props.mode} mt-5`}
                style={{ padding: "0px" }}
              >
                <img
                  src={Kartik_ProfileIMG2}
                  alt="aboutIMG"
                  className="responsive "
                  id="profileIMG2"
                />
              </div>
              <div className="mt-5" id="cv">
                <button className="btn specialBTN">
                  <a href={CV} className="BTN_Link" download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 col-xl-8 p-5" id="aboutIntro">
            <div className="mt-4" id="aboutHeading">
              <h1>About Me</h1>
            </div>
            <div id="aboutIntroText">
              <p>
                I am a full-stack developer and will soon complete my bachelor's
                degree in computer science at the Frankfurt University of
                Applied Sciences. I have good experience in web development.
                Below you can get an overview of my skills with various
                programming technologies.
              </p>
              <p>
                My Main Goal is to help & Satisficed the Local & Global Clients
                by web development solutions.
              </p>
            </div>
            <div id="aboutIntroLinks">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link text-mode-${
                      props.mode === "light" ? "dark" : "light"
                    } active`}
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#skills"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => changeAboutIntroLink("skills")}
                  >
                    Skills
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link text-mode-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#experience"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => changeAboutIntroLink("experience")}
                  >
                    Experience
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link text-mode-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#education"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    onClick={() => changeAboutIntroLink("education")}
                  >
                    Education
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                {/* Skills */}
                {aboutIntroLink === "skills" && (
                  <Development mode={props.mode} ease={props.ease} />
                )}
                {/* Experience */}
                {aboutIntroLink === "experience" && (
                  <Experience mode={props.mode} ease={props.ease} />
                )}
                {/* Education */}
                {aboutIntroLink === "education" && (
                  <Education mode={props.mode} ease={props.ease} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
