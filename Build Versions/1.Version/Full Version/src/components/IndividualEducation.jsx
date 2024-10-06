import React from "react"

export default function IndividualEducation(props) {
  return (
    <div>
      <div className="mt-3 individual">
        <div className="heading">
          <h6 style={{ color: "#ff7b00" }}>{props.educationHeading}</h6>
        </div>
        <div className="ps-1 content">
          <p>{props.educationContent}</p>
        </div>
      </div>
    </div>
  )
}
