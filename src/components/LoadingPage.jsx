import React, { useEffect, useRef } from "react"

import "./LoadingPage.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function LoadingPage(props) {
  let tl = props.timeline
  let loadingPage = useRef(null)

  useEffect(() => {
    function loaderTime() {
      var loaderPercentage = 0

      setInterval(function () {
        loaderPercentage += Math.floor(Math.random() * 20)

        if (loaderPercentage < 100) {
          document.querySelector("#loaderText").innerHTML =
            loaderPercentage + "%"
        } else {
          loaderPercentage = 100
          document.querySelector("#loaderText").innerHTML =
            loaderPercentage + "%"
        }
      }, 150)
    }
    let ctx = gsap.context(() => {
      tl.to("#loaderText", {
        delay: 0.5,
        duration: 1,
        onStart: loaderTime(),
      })
      tl.to("#loadingPage", {
        opacity: 0,
        // top: "-100vh",
        delay: 0.5,
        duration: 1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div>
      <div
        className="container"
        id="loadingPage"
        ref={(el) => (loadingPage = el)}
      >
        <div className="row">
          <div className="col-12" id="loader">
            <h1 id="loaderText">Hello...</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
