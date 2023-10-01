import React, { Component } from "react"

import "./Experience.css"

export class Experience extends Component {
  render() {
    return (
      <div>
        <div
          className="tab-pane fade pt-1 show"
          id="experience"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="mt-3" id="individualExperience">
            <div id="experienceHeading">
              <h5 style={{ color: "#ff7b00" }}>2023 - Current</h5>
            </div>
            <div className="ps-1" id="experienceContent">
              <p>Desktop & Web Application Developer</p>
            </div>
          </div>
          <div className="mt-3" id="individualExperience">
            <div id="experienceHeading">
              <h6 style={{ color: "#ff7b00" }}>2022 - 2023</h6>
            </div>
            <div className="ps-1" id="experienceContent">
              <p>FullStake Developer</p>
            </div>
          </div>
          <div className="mt-3" id="individualExperience">
            <div id="experienceHeading">
              <h6 style={{ color: "#ff7b00" }}>2022 - 2022</h6>
            </div>
            <div className="ps-1" id="experienceContent">
              <p>Back-End Developer</p>
            </div>
          </div>
          <div className="mt-3" id="individualExperience">
            <div id="experienceHeading">
              <h6 style={{ color: "#ff7b00" }}>2021 - 2022</h6>
            </div>
            <div className="ps-1" id="experienceContent">
              <p>Front-End Developer</p>
            </div>
          </div>
          <div className="mt-3" id="individualExperience">
            <div id="experienceHeading">
              <h6 style={{ color: "#ff7b00" }}>2019 - 2020</h6>
            </div>
            <div className="ps-1" id="experienceContent">
              <p>Programming Tutor ( part-time )</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
