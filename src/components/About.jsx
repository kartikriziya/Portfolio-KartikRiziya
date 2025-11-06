import React, { useEffect, useRef, useState } from "react"
import Development from "./Development"

import Experience from "./Experience"
import Education from "./Education"

import Kartik_ProfileIMG2 from "../assets/Kartik_ProfileIMG3.png"
import Kartik_Profile_halfIMG from "../assets/kartik_img/Kartik_Profile_half.png"
import CV from "../assets/Kartik_CV.pdf"

import "./About.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function About(props) {
  const [aboutIntroLink, setAboutIntroLink] = useState("skills")
  let tlAbout = new gsap.timeline()
  let about = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      tlAbout
        .from("#aboutHeading, #aboutIntroText, #myTab", {
          opacity: 0,
          x: 100,
          stagger: { amount: 0.3 },
          ease: props.ease,
        })
        .from("#aboutIMG_CV", {
          opacity: 0,
          x: -100,
          ease: props.ease,
        })
        .from(".skill, .content", {
          opacity: 0,
          y: 100,
          stagger: { amount: 0.3 },
          ease: props.ease,
        })

      ScrollTrigger.create({
        // markers: true,
        animation: tlAbout,
        trigger: about,
        scroller: "body",
        start: "top 70%",
      })
    })
    return () => ctx.revert()
  }, [])

  const changeAboutIntroLink = (event, target) => {
    setAboutIntroLink(target)
    // alert(event.id)
    const allLinks = document.querySelectorAll(".nav-link")
    allLinks.forEach((link) => link.classList.remove("active"))
    document.querySelector("#" + event.id).classList.add("active")
  }

  return (
    <div>
      <div className="container-fluid" id="about" ref={(el) => (about = el)}>
        <div className="row pt-sm-5">
          <div className="col-md-6 col-lg-5 col-xl-4 p-sm-5" id="aboutProfile">
            <div id="aboutIMG_CV">
              <div
                className={`profileRoundCard-${props.mode} mt-5`}
                style={{ padding: "0px" }}
              >
                <img
                  src={Kartik_Profile_halfIMG}
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
          <div className="col-md-6 col-lg-7 col-xl-8 p-sm-5" id="aboutIntro">
            <div className="mt-4 " id="aboutHeading">
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
              <ul
                className="nav nav-tabs flex-nowrap flex-sm-wrap overflow-auto"
                id="myTab"
                role="tablist"
                style={{ gap: "0.5rem", whiteSpace: "nowrap" }}
              >
                <li
                  className="nav-item"
                  role="presentation"
                  style={{ flex: "0 0 auto" }}
                >
                  <a
                    className={`nav-link text-mode-${
                      props.mode === "light" ? "dark" : "light"
                    } active`}
                    id="skills-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#skills"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    onClick={(event) =>
                      changeAboutIntroLink(event.currentTarget, "skills")
                    }
                  >
                    Skills
                  </a>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  style={{ flex: "0 0 auto" }}
                >
                  <a
                    className={`nav-link text-mode-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    id="experience-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#experience"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    onClick={(event) =>
                      changeAboutIntroLink(event.currentTarget, "experience")
                    }
                  >
                    Experience
                  </a>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  style={{ flex: "0 0 auto" }}
                >
                  <a
                    className={`nav-link text-mode-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                    id="education-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#education"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    onClick={(event) =>
                      changeAboutIntroLink(event.currentTarget, "education")
                    }
                  >
                    Education
                  </a>
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
