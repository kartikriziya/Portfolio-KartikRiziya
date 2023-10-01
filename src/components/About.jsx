import React, { Component } from "react"

import Kartik_ProfileIMG2 from "../assets/Kartik_ProfileIMG2.png"
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import Bootstrap from "../assets/bootstrap.png"
import jQuery from "../assets/jquery.png"
import Vuejs from "../assets/vuejs.png"
import Reactjs from "../assets/reactjs.png"

import Php from "../assets/php.png"
import PhpMyAdmin from "../assets/phpmyadmin.png"
import MySQL from "../assets/mysql.png"
import Nodejs from "../assets/nodejs.png"

import Office from "../assets/office.png"
import Vba from "../assets/vba.png"
import "./About.css"

export class About extends Component {
  constructor() {
    super()
    this.state = {
      aboutIntroLink: "skills",
    }
  }
  render() {
    const changeAboutIntroLink = (target) => {
      this.setState({
        aboutIntroLink: target,
      })
      console.log(this.state.aboutIntroLink)
    }
    return (
      <div className="container-fluid" id="about">
        <div className="row">
          <div
            className="col-md-6 col-lg-5 col-xl-4 mt-5 p-5"
            id="aboutProfile"
          >
            <div
              className={`profileCard-${this.props.mode} mt-5`}
              style={{ padding: "0px" }}
            >
              <img
                src={Kartik_ProfileIMG2}
                alt="aboutIMG"
                className="responsive "
                id="profileIMG2"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-7 col-xl-8 mt-5 p-5" id="aboutIntro">
            <div className="mt-4" id="aboutHeading">
              <h1>About Me</h1>
            </div>
            <div id="aboutIntroText">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat officiis reiciendis laborum. Accusamus saepe beatae
                harum culpa? Animi tenetur culpa consequatur voluptatibus aut
                vitae sed, voluptatem suscipit consequuntur fuga exercitationem
                tempore dolores? Odit, amet. Neque blanditiis doloribus alias
                ipsa dolor architecto vero quasi ullam iure nihil numquam odio
                quos quas ducimus, ipsam repellendus sunt molestiae nostrum quae
                aperiam commodi enim autem molestias. Repellat in est, amet ipsa
                dolorum perferendis aliquid ad sed, adipisci dicta itaque
                officiis odit sunt? Vitae, nostrum? Laudantium iure, unde
                mollitia rem tempora adipisci minima cupiditate, vel veritatis
                fugiat odit magnam esse autem. Est mollitia omnis labore quidem
                rem temporibus a consectetur fuga, cum incidunt impedit magnam
                animi provident ipsa tempore dolor neque repellat molestiae
                nobis nemo vero. Fuga nulla voluptates iusto nobis doloribus
                earum, esse hic libero? Eius dolores, necessitatibus dolorum
                voluptatibus magni hic ut provident accusamus iusto libero.
                Officiis eius unde sed itaque necessitatibus optio odit.
              </p>
            </div>
            <div id="aboutIntroLinks">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link text-mode-${
                      this.props.mode === "light" ? "dark" : "light"
                    } active`}
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#skills"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => changeAboutIntroLink("skills")}
                  >
                    Skills
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link text-mode-${
                      this.props.mode === "light" ? "dark" : "light"
                    }`}
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#experience"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => changeAboutIntroLink("experience")}
                  >
                    Experience
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link text-mode-${
                      this.props.mode === "light" ? "dark" : "light"
                    }`}
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#education"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    onClick={() => changeAboutIntroLink("education")}
                  >
                    Education
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                {/* Skills */}
                {this.state.aboutIntroLink === "skills" && (
                  <div
                    className="tab-pane fade pt-3 show active"
                    id="skills"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    {/* Front-End Skills */}
                    <div id="frontendDevelopment">
                      <div id="developmentHeading">
                        <h6 style={{ color: "#ff7b00" }}>
                          Front-End Development
                        </h6>
                      </div>
                      <div className="ps-5" id="developmentContent">
                        <div className={`skillCard-${this.props.mode}`}>
                          <img src={Html} alt="Html" id="frontendSkills" />
                        </div>
                        <div className={`skillCard-${this.props.mode}`}>
                          <img src={Css} alt="CSS" id="frontendSkills" />
                        </div>
                        <div className={`skillCard-${this.props.mode}`}>
                          <img
                            src={JavaScript}
                            alt="JavaScript"
                            id="frontendSkills"
                          />
                        </div>
                        <div className={`skillCard-${this.props.mode}`}>
                          <img
                            src={Bootstrap}
                            alt="Bootstrap"
                            id="frontendSkills"
                          />
                        </div>
                        <div className={`skillCard-${this.props.mode}`}>
                          <img src={jQuery} alt="jQuery" id="frontendSkills" />
                        </div>
                        <div className={`skillCard-${this.props.mode}`}>
                          <img src={Vuejs} alt="Vue.js" id="frontendSkills" />
                        </div>
                        <div className={`skillCard-${this.props.mode}`}>
                          <img
                            src={Reactjs}
                            alt="React.js"
                            id="frontendSkills"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Back-End Skills */}
                    <div id="backendDevelopment">
                      <div id="developmentHeading">
                        <h6 style={{ color: "#ff7b00" }}>
                          Back-End Development
                        </h6>
                      </div>
                      <div className="ps-5" id="developmentContent">
                        <div className={`skillCard-${this.props.mode}`}>
                          <img src={Php} alt="Php" id="backendSkills" />
                        </div>
                        <div className={`skillCard-${this.props.mode}`}>
                          <img
                            src={PhpMyAdmin}
                            alt="PhpMyAdmin"
                            id="backendSkills"
                          />
                        </div>
                        <div className={`skillCard-${this.props.mode}`}>
                          <img src={MySQL} alt="MySQL" id="backendSkills" />
                        </div>
                        <div className={`skillCard-${this.props.mode}`}>
                          <img src={Nodejs} alt="Nodejs" id="backendSkills" />
                        </div>
                      </div>
                    </div>
                    {/* Excel Skills */}
                    <div id="excelDevelopment">
                      <div id="developmentHeading">
                        <h6 style={{ color: "#ff7b00" }}>
                          Excel-App Development
                        </h6>
                        <div className="ps-5" id="developmentContent">
                          <div className={`skillCard-${this.props.mode}`}>
                            <img src={Office} alt="Office" id="excelSkills" />
                          </div>
                          <div className={`skillCard-${this.props.mode}`}>
                            <img src={Vba} alt="Vba" id="excelSkills" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Experience */}
                {this.state.aboutIntroLink === "experience" && (
                  <div
                    className="tab-pane fade show"
                    id="experience"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptas, autem. Mollitia magni aliquam repudiandae sapiente
                    esse corrupti itaque nostrum exercitationem.
                  </div>
                )}
                {/* Education */}
                {this.state.aboutIntroLink === "education" && (
                  <div
                    className="tab-pane fade show"
                    id="education"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, sit? Incidunt tenetur amet consequatur reiciendis
                    eveniet quae repellat cum ex ipsam debitis? Debitis velit
                    laborum quam. Doloribus a voluptate vero!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
