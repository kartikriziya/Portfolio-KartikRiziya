import React from "react"

export default function Skill(props) {
  return (
    <div>
      <div className={`skillCard-${props.mode}`}>
        <img src={props.skillIMG} alt="skillIMG" className="skill" />
      </div>
    </div>
  )
}
