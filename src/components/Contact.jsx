import React, { Component } from "react"

import { BiSolidUser } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6"

import "./Contact.css"

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" id="contact">
          <div className="row pt-5 pb-5">
            <div className="col-12 text-center" id="contactHeading">
              <h1>Contact me</h1>
            </div>
          </div>
          <div className="row p-5">
            <div className="col-md-6 ps-5" id="contactDetails">
              <div className="row">
                <div className="col-12 pb-4" id="contactDetailsHeading">
                  <h2 style={{ color: "#ff7b00" }}>Get in Touch</h2>
                </div>
                <div className="col-12 pb-5" id="contactDetailsIntro">
                  <p>
                    Now, that you know me, I want to get to know you too.
                    Everygreat deal starts with a good conversation.
                  </p>
                  <p>
                    Get in touch on e-mail, Skype or phone (please note that if
                    you call outside of Europe time, I might be still dreaming
                    in my bed.)
                  </p>
                  <p>
                    I speak German, English, Hindi and Gujarati (Mother tounge)
                  </p>
                </div>
                <div className="col-12 pb-4" id="individualDetail">
                  <div className="" id="individualDetailIcon">
                    <BiSolidUser />
                  </div>
                  <div className="ps-4" id="individualDetailTYP">
                    <h6 style={{ color: "#ff7b00" }}>Name</h6>
                    <p>Kartik Riziya</p>
                  </div>
                </div>
                <div className="col-12 pb-4" id="individualDetail">
                  <div className="" id="individualDetailIcon">
                    <MdEmail />
                  </div>
                  <div className="ps-4" id="individualDetailTYP">
                    <h6 style={{ color: "#ff7b00" }}>Email</h6>
                    <p>kartikriziya30721@gmail.com</p>
                  </div>
                </div>
                <div className="col-12 pb-4" id="individualDetail">
                  <div className="" id="individualDetailIcon">
                    <BsFillTelephoneFill />
                  </div>
                  <div className="ps-4" id="individualDetailTYP">
                    <h6 style={{ color: "#ff7b00" }}>Phone</h6>
                    <p>+49 176 4596 2197</p>
                  </div>
                </div>
                <div className="col-12 pb-4" id="individualDetail">
                  <div className="" id="individualDetailIcon">
                    <FaLocationDot />
                  </div>
                  <div className="ps-4" id="individualDetailTYP">
                    <h6 style={{ color: "#ff7b00" }}>Address</h6>
                    <p>Frankfurt, Germany</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="col-12 ps-5 " id="contactDetailsHeading">
                <h2 style={{ color: "#ff7b00" }}>Message me</h2>
              </div>
              <div className="form p-5 text-dark" id="contactForm">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="first name"
                      />
                      <label htmlFor="floatingInput">First Name</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="last name"
                      />
                      <label htmlFor="floatingInput">Last Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-floating mb-3">
                      <textarea
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Leave a message here"
                        style={{ height: "250px" }}
                      />
                      <label htmlFor="floatingInput">
                        Leave a message here
                      </label>
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
}

export default Contact
