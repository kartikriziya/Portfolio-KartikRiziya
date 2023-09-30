import React, { Component } from "react"

import Kartik_ProfileIMG2 from "../assets/Kartik_ProfileIMG2.png"
import "./About.css"

export class About extends Component {
  render() {
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
                  >
                    Education
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="skills"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, incidunt.
                </div>
                <div
                  className="tab-pane fade"
                  id="experience"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas, autem. Mollitia magni aliquam repudiandae sapiente
                  esse corrupti itaque nostrum exercitationem.
                </div>
                <div
                  className="tab-pane fade"
                  id="education"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, sit? Incidunt tenetur amet consequatur reiciendis
                  eveniet quae repellat cum ex ipsam debitis? Debitis velit
                  laborum quam. Doloribus a voluptate vero!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
