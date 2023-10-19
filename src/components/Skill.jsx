import React from "react"

export default function Skill(props) {
  return (
    <div>
      <div className={`skillCard-${props.mode} skill`}>
        <img
          src={props.skillIMG}
          alt="skillIMG"
          className="responsive skillIMG"
        />
      </div>
    </div>
  )
}
