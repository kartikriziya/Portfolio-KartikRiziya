import React, { useEffect, useRef, useState } from "react"

import "./Dummy.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Dummy(props) {
  let tlDummy = new gsap.timeline()
  let dummy = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        // markers: true,
        trigger: dummy,
        scroller: "body",
        start: "top 70%",
        onEnter() {
          // header nav-link hover color
          document
            .querySelector("#headerNavbar .navbar-nav")
            .classList.remove("headerUL")

          // header background-color
          document
            .querySelector("#headerNavbar")
            .classList.remove("bg-" + props.mode)
          document.querySelector("#headerNavbar").style.backgroundColor =
            "#ff7b00"

          // header logo end color
          props.mode === "dark"
            ? (document.querySelector("#logoEnd").style.color = "#212529")
            : (document.querySelector("#logoEnd").style.color = "#f8f9fa")
        },
        onLeaveBack() {
          // header nav-link hover color
          document
            .querySelector("#headerNavbar .navbar-nav")
            .classList.add("headerUL")

          // header background-color
          document
            .querySelector("#headerNavbar")
            .classList.add("bg-" + props.mode)

          // header logo end color
          document.querySelector("#logoEnd").style.color = "#ff7b00"
        },
      })
    })
    return () => ctx.revert()
  }, [props])

  return (
    <div>
      <div
        className="container-fluid"
        id="dummy"
        ref={(el) => (dummy = el)}
      ></div>
    </div>
  )
}
