import React, { useEffect, useRef, useState } from "react"

import Kartik_ProfileIMG2 from "../assets/Kartik_ProfileIMG1.1.png"
import CV from "../assets/Kartik_CV.pdf"

import "./NewAbout.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" // Import the ScrollTrigger plugin
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP, ScrollTrigger)

function NewAbout(props) {
  let tl = props.timeline
  const aboutContainer = useRef()

  // Function to get current position of images
  const getCurrentPositions = () => {
    const image2 = document.getElementById("profileIMG2")
    const image1 = props.profileImgRef.current

    if (image2 && image1) {
      const image2Rect = image2.getBoundingClientRect()
      const image1Rect = image1.getBoundingClientRect()

      return { image1Rect, image2Rect }
    }
    return null // Return null if images are not found
  }

  useGSAP(
    () => {
      console.log("GSAP animation triggered")

      // Get current positions of the images
      const { image1Rect, image2Rect } = getCurrentPositions() || {}

      if (image1Rect && image2Rect) {
        const test = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "0% 95%",
            end: "50% 50%",
            scrub: true,
            markers: true,
          },
        })

        // console.log(image2Rect.top - image1Rect.top)

        // Animation to move profile image
        tl &&
          test.to(props.profileImgRef.current, {
            x: image2Rect.left - image1Rect.left, // Move x
            y: image2Rect.top - image1Rect.top, // Move y
            height: image2Rect.height, // Change height to match profileIMG2
            width: image2Rect.width, // Change width to match profileIMG2
            duration: 1, // Animation duration
            ease: "power1.out", // Easing for smooth animation
          })
      }
    },
    { scope: aboutContainer }
  )

  return (
    <div ref={aboutContainer}>
      <div
        className="row pt-sm-5"
        id="about"
        // style={{ backgroundColor: "#ff7b00" }}
      >
        <div className="col-md-6 col-lg-5 col-xl-4 p-sm-5" id="aboutProfile">
          <div id="aboutIMG_CV">
            <div
              className={`profileCard-${props.mode} mt-5`}
              style={{ padding: "0px" }}
            >
              <img
                src={Kartik_ProfileIMG2}
                alt="aboutIMG"
                className="responsive "
                id="profileIMG2"
              />
            </div>
            <div className="mt-5" id="cv">
              <button className="btn specialBTN">
                <a href={CV} className="BTN_Link" download>
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewAbout
