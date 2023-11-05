import React, { useEffect, useRef } from "react"

import WWW from "../assets/www.png"
import Design from "../assets/design.png"
import Code from "../assets/code.png"

import "./Services.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Services(props) {
  let tlServices = new gsap.timeline()
  let services = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      tlServices
        .from("#servicesHeading", {
          opacity: 0,
        })
        .from(".service", {
          opacity: 0,
          x: "-100",
          stagger: { amount: 0.3 },
          ease: props.ease,
          duration: 1,
        })

      ScrollTrigger.create({
        // markers: true,
        animation: tlServices,
        trigger: services,
        scroller: "body",
        start: "top 70%",
      })
    })
    return () => ctx.revert()
  }, [])
  return (
    <div>
      <div
        className="container-fluid"
        id="services"
        ref={(el) => (services = el)}
      >
        <div className="row pt-sm-5">
          <div className="col-12 p-5">
            <div className="ps-sm-5" id="servicesHeading">
              <h1>Services</h1>
            </div>
          </div>
        </div>

        <div className="row p-sm-5">
          <div className="col-md-6 col-xl-4 mb-5 ps-5 pe-5">
            <div className={`serviceCard-${props.mode} service`}>
              <div className="row">
                <div className="col-12">
                  <div id="serviceIMG_Head">
                    <img
                      src={WWW}
                      alt="web"
                      className="responsive"
                      id="serviceIMG"
                    />
                    <h1>Web Development</h1>
                  </div>
                </div>
                <div className="col-12">
                  <div id="serviceIntro">
                    <p>
                      My mission is to design and develop a website that you and
                      your audience love. Primary role is to ensure the website
                      is visually appealing and easy to navigate
                    </p>
                    <p>
                      I develop a single-page Website so that it doesn't load
                      when the Webpage changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-5 ps-5 pe-5">
            <div className={`serviceCard-${props.mode} service`}>
              <div className="row">
                <div className="col-12">
                  <div id="serviceIMG_Head">
                    <img
                      src={Design}
                      alt="web"
                      className="responsive"
                      id="serviceIMG"
                    />
                    <h1>Web Design</h1>
                  </div>
                </div>
                <div className="col-12">
                  <div id="serviceIntro">
                    <p>
                      I ensure that the website is responsive, meaning that the
                      website has the same interface no matter what device is
                      being browsed on
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 mb-5 ps-5 pe-5">
            <div className={`serviceCard-${props.mode} service`}>
              <div className="row">
                <div className="col-12">
                  <div id="serviceIMG_Head">
                    <img
                      src={Code}
                      alt="web"
                      className="responsive"
                      id="serviceIMG"
                    />
                    <h1>App Development</h1>
                  </div>
                </div>
                <div className="col-12">
                  <div id="serviceIntro">
                    <p>
                      I design creative prototypes according to specifications.
                    </p>
                    <p>
                      Also, I develop Microsoft Access Databases, including
                      tables, queries, forms and reports, using standard IT
                      processes, with data normalization and referential
                      integrity. Use Visual Basic in Microsoft Applications,
                      including Excel, Access, Word and PowerPoint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
