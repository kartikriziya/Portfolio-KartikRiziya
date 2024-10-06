import React from "react"

import "./About.css"
export default function IndividualExperience(props) {
  return (
    <div>
      <div className="mt-3 individual">
        <div className="heading">
          <h6 style={{ color: "#ff7b00" }}>{props.experienceHeading}</h6>
        </div>
        <div className="ps-1 content">
          <p>{props.experienceContent}</p>
        </div>
      </div>
    </div>
  )
}
