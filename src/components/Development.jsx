import React, { Component, useEffect, useRef } from "react"

import Skill from "./Skill"

import Html from "../assets/html.png"
import Css from "../assets/css.png"
import TailwindCss from "../assets/tailwind.png"
import JavaScript from "../assets/javascript.png"
import Bootstrap from "../assets/bootstrap.png"
import jQuery from "../assets/jquery.png"
import Vuejs from "../assets/vuejs.png"
import Reactjs from "../assets/reactjs.png"
import Gsap from "../assets/gsap.png"

import Php from "../assets/php.png"
import PhpMyAdmin from "../assets/phpmyadmin.png"
import MySQL from "../assets/mysql.png"
import PostgreSQL from "../assets/postgresql.png"
import Nodejs from "../assets/nodejs.png"

import Office from "../assets/office.png"
import Vba from "../assets/vba.png"
import PowerBI from "../assets/powerbi.png"

import "./Development.css"

export default function Development(props) {
  return (
    <div>
      <div
        className="tab-pane fade pt-1 show active"
        id="skills"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        {/* Front-End Skills */}
        <div className="mt-3" id="frontendDevelopment">
          <div className="heading">
            <h6 style={{ color: "#ff7b00" }}>Front-End Development</h6>
          </div>
          <div className="ps-sm-5 developmentContent">
            <Skill mode={props.mode} skillIMG={Html} />
            <Skill mode={props.mode} skillIMG={Css} />
            <Skill mode={props.mode} skillIMG={TailwindCss} />
            <Skill mode={props.mode} skillIMG={JavaScript} />
            <Skill mode={props.mode} skillIMG={Bootstrap} />
            <Skill mode={props.mode} skillIMG={jQuery} />
            <Skill mode={props.mode} skillIMG={Vuejs} />
            <Skill mode={props.mode} skillIMG={Reactjs} />
            <Skill mode={props.mode} skillIMG={Gsap} />
          </div>
        </div>
        {/* Back-End Skills */}
        <div className="mt-3" id="backendDevelopment">
          <div className="heading">
            <h6 style={{ color: "#ff7b00" }}>Back-End Development</h6>
          </div>
          <div className="ps-sm-5 developmentContent">
            <Skill mode={props.mode} skillIMG={Php} />
            <Skill mode={props.mode} skillIMG={PhpMyAdmin} />
            <Skill mode={props.mode} skillIMG={MySQL} />
            <Skill mode={props.mode} skillIMG={PostgreSQL} />
            <Skill mode={props.mode} skillIMG={Nodejs} />
          </div>
        </div>
        {/* Excel Skills */}
        <div className="mt-3" id="excelDevelopment">
          <div className="heading">
            <h6 style={{ color: "#ff7b00" }}>Microsoft-App Development</h6>
            <div className="ps-sm-5 developmentContent">
              <Skill mode={props.mode} skillIMG={Office} />
              <Skill mode={props.mode} skillIMG={Vba} />
              <Skill mode={props.mode} skillIMG={PowerBI} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
