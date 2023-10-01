import React, { Component } from "react"

import "./Education.css"

export class Education extends Component {
  render() {
    return (
      <div>
        <div
          className="tab-pane fade pt-1 show"
          id="education"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="mt-3" id="individualEducation">
            <div id="educationHeading">
              <h5 style={{ color: "#ff7b00" }}>2021 - Current</h5>
            </div>
            <div className="ps-1" id="educationContent">
              <p>BSc. Computer Science</p>
            </div>
          </div>
          <div className="mt-3" id="individualEducation">
            <div id="educationHeading">
              <h6 style={{ color: "#ff7b00" }}>2020 - 2021</h6>
            </div>
            <div className="ps-1" id="educationContent">
              <p>Studienkolleg T-Kurs</p>
            </div>
          </div>
          <div className="mt-3" id="individualEducation">
            <div id="educationHeading">
              <h6 style={{ color: "#ff7b00" }}>2019 - 2020</h6>
            </div>
            <div className="ps-1" id="educationContent">
              <p>German Language ( C1 Level )</p>
            </div>
          </div>
          <div className="mt-3" id="individualEducation">
            <div id="educationHeading">
              <h6 style={{ color: "#ff7b00" }}>2018 - 2019</h6>
            </div>
            <div className="ps-1" id="educationContent">
              <p>Diploma in Web Designing & Programming Course</p>
            </div>
          </div>
          <div className="mt-3" id="individualEducation">
            <div id="educationHeading">
              <h6 style={{ color: "#ff7b00" }}>2016 - 2018</h6>
            </div>
            <div className="ps-1" id="educationContent">
              <p>Higher Secondary School</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Education
