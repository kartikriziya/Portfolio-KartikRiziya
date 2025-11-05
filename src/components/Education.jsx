import React, { Component } from "react"

import IndividualEducation from "./IndividualEducation"
import "./Education.css"

export default function Education(props) {
  return (
    <div>
      <div
        className="tab-pane fade pt-1 show"
        id="education"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div className="mt-3 individual">
          <div className="heading">
            <h5 style={{ color: "#ff7b00" }}>2022 - Current</h5>
          </div>
          <div className="ps-1 content">
            <p>B.Sc. Computer Science</p>
          </div>
        </div>

        <IndividualEducation
          educationHeading={"2021 - 2022"}
          educationContent={"Studienkolleg T-Kurs"}
        />
        <IndividualEducation
          educationHeading={"2019 - 2021"}
          educationContent={"German Language ( B2, C1 Level )"}
        />
        <IndividualEducation
          educationHeading={"2018 - 2019"}
          educationContent={"Diploma in Web Designing & Programming Course"}
        />
        <IndividualEducation
          educationHeading={"2016 - 2018"}
          educationContent={"Higher Secondary School"}
        />
      </div>
    </div>
  )
}
