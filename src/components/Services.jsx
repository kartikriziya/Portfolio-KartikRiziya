import React, { Component } from "react"

import Web from "../assets/web.png"

import "./Services.css"

export class Services extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" id="services">
          <div className="row">
            <div className="col-12 mt-5 p-5">
              <div className="ms-5 ps-5" id="servicesHeading">
                <h1>Services</h1>
              </div>
            </div>
          </div>

          <div className="row ps-5 pe-5">
            <div className="col-md-6 col-xl-4 ps-5 pe-5">
              <div className="ms-5 serviceCard-dark">
                <div className="row">
                  <div className="col-12">
                    <div id="serviceIMG_Head">
                      <img src={Web} alt="web" id="serviceIMG" />
                      <h1>Web Development</h1>
                    </div>
                  </div>
                  <div className="col-12">
                    <div id="serviceIntro">
                      <p>
                        My mission is to design and develop a website that you
                        and your audience love. Primary role is to ensure the
                        website is visually appealing and easy to navigate
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

            <div className="col-md-6 col-xl-4 ps-5 pe-5">
              <div className="ms-5 serviceCard-dark">
                <div className="row">
                  <div className="col-12">
                    <div id="serviceIMG_Head">
                      <img src={Web} alt="web" id="serviceIMG" />
                      <h1>Web Development</h1>
                    </div>
                  </div>
                  <div className="col-12">
                    <div id="serviceIntro">
                      <p>
                        I ensure that the website is responsive, meaning that
                        the website has the same interface no matter what device
                        is being browsed on
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4 ps-5 pe-5">
              <div className="ms-5 serviceCard-dark">
                <div className="row">
                  <div className="col-12">
                    <div id="serviceIMG_Head">
                      <img src={Web} alt="web" id="serviceIMG" />
                      <h1>Web Development</h1>
                    </div>
                  </div>
                  <div className="col-12">
                    <div id="serviceIntro"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
