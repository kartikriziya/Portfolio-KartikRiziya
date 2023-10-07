import React from "react"

import Kartik_ProfileIMG from "../assets/Kartik_ProfileIMG.png"

import "./Home.css"

export default function Home(props) {
  return (
    <div>
      <div className="container-fluid" id="home">
        <div className="row">
          <div className="col-md-6 ps-5" id="homeIntro">
            <div className="ms-5 ps-5" id="homeIntroText">
              <h4>Hello, my name is </h4>
              <h1>Kartik Riziya</h1>
              <h2>
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
            <div className={`profileCard-${props.mode} mt-5`}>
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
