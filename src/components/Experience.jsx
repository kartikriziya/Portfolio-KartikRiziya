import React, { Component } from "react"

import "./Experience.css"
import IndividualExperience from "./individualExperience"

export default function Experience(props) {
  return (
    <div>
      <div
        className="tab-pane fade pt-1 show"
        id="experience"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div className="mt-3 individual">
          <div id="heading">
            <h5 style={{ color: "#ff7b00" }}>2023 - Current</h5>
          </div>
          <div className="ps-1 content">
            <p>Desktop & Web Application Developer</p>
          </div>
        </div>
        <IndividualExperience
          experienceHeading={"2022 - 2023"}
          experienceContent={"FullStake Developer"}
        />
        <IndividualExperience
          experienceHeading={"2022 - 2022"}
          experienceContent={"Back-End Developer"}
        />
        <IndividualExperience
          experienceHeading={"2021 - 2022"}
          experienceContent={"Front-End Developer"}
        />
        <IndividualExperience
          experienceHeading={"2019 - 2020"}
          experienceContent={"Programming Tutor ( part-time )"}
        />
      </div>
    </div>
  )
}
