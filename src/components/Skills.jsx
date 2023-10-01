import React, { Component } from "react"

import Html from "../assets/html.png"
import Css from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import Bootstrap from "../assets/bootstrap.png"
import jQuery from "../assets/jquery.png"
import Vuejs from "../assets/vuejs.png"
import Reactjs from "../assets/reactjs.png"

import Php from "../assets/php.png"
import PhpMyAdmin from "../assets/phpmyadmin.png"
import MySQL from "../assets/mysql.png"
import Nodejs from "../assets/nodejs.png"

import Office from "../assets/office.png"
import Vba from "../assets/vba.png"

import "./Skills.css"

export class Skills extends Component {
  render() {
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
            <div id="developmentHeading">
              <h6 style={{ color: "#ff7b00" }}>Front-End Development</h6>
            </div>
            <div className="ps-5" id="developmentContent">
              <div className={`skillCard-${this.props.mode}`}>
                <img src={Html} alt="Html" id="frontendSkills" />
              </div>
              <div className={`skillCard-${this.props.mode}`}>
                <img src={Css} alt="CSS" id="frontendSkills" />
              </div>
              <div className={`skillCard-${this.props.mode}`}>
                <img src={JavaScript} alt="JavaScript" id="frontendSkills" />
              </div>
              <div className={`skillCard-${this.props.mode}`}>
                <img src={Bootstrap} alt="Bootstrap" id="frontendSkills" />
              </div>
              <div className={`skillCard-${this.props.mode}`}>
                <img src={jQuery} alt="jQuery" id="frontendSkills" />
              </div>
              <div className={`skillCard-${this.props.mode}`}>
                <img src={Vuejs} alt="Vue.js" id="frontendSkills" />
              </div>
              <div className={`skillCard-${this.props.mode}`}>
                <img src={Reactjs} alt="React.js" id="frontendSkills" />
              </div>
            </div>
          </div>
          {/* Back-End Skills */}
          <div className="mt-3" id="backendDevelopment">
            <div id="developmentHeading">
              <h6 style={{ color: "#ff7b00" }}>Back-End Development</h6>
            </div>
            <div className="ps-5" id="developmentContent">
              <div className={`skillCard-${this.props.mode}`}>
                <img src={Php} alt="Php" id="backendSkills" />
              </div>
              <div className={`skillCard-${this.props.mode}`}>
                <img src={PhpMyAdmin} alt="PhpMyAdmin" id="backendSkills" />
              </div>
              <div className={`skillCard-${this.props.mode}`}>
                <img src={MySQL} alt="MySQL" id="backendSkills" />
              </div>
              <div className={`skillCard-${this.props.mode}`}>
                <img src={Nodejs} alt="Nodejs" id="backendSkills" />
              </div>
            </div>
          </div>
          {/* Excel Skills */}
          <div className="mt-3" id="excelDevelopment">
            <div id="developmentHeading">
              <h6 style={{ color: "#ff7b00" }}>Microsoft-App Development</h6>
              <div className="ps-5" id="developmentContent">
                <div className={`skillCard-${this.props.mode}`}>
                  <img src={Office} alt="Office" id="excelSkills" />
                </div>
                <div className={`skillCard-${this.props.mode}`}>
                  <img src={Vba} alt="Vba" id="excelSkills" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
