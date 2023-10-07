import React, { useState } from "react"
import Skills from "./Skills"

import Experience from "./Experience"
import Education from "./Education"

import Kartik_ProfileIMG2 from "../assets/Kartik_ProfileIMG2.png"
import CV from "../assets/Kartik_CV.pdf"

import "./About.css"

export default function About(props) {
  const [aboutIntroLink, setAboutIntroLink] = useState("skills")

  const changeAboutIntroLink = (target) => {
    setAboutIntroLink(target)
    // console.log(this.state.aboutIntroLink)
  }

  return (
    <div>
      <div className="container-fluid" id="about">
        <div className="row p-5">
          <div className="col-md-6 col-lg-5 col-xl-4 mt-5" id="aboutProfile">
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
                <button className="btn" id="BTN">
                  <a href={CV} id="BTN_Link" download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 col-xl-8 p-5" id="aboutIntro">
            <div className="mt-4" id="aboutHeading">
              <h1>About Me</h1>
            </div>
            <div id="aboutIntroText">
              <p>
                I am a full-stack developer and will soon complete my bachelor's
                degree in computer science at the Frankfurt University of
                Applied Sciences. I have good experience in web development.
                Below you can get an overview of my skills with various
                programming technologies.
              </p>
              <p>
                My Main Goal is to help & Satisficed the Local & Global Clients
                by web development solutions.
              </p>
            </div>
            <div id="aboutIntroLinks">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link text-mode-${
                      props.mode === "light" ? "dark" : "light"
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
                      props.mode === "light" ? "dark" : "light"
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
                      props.mode === "light" ? "dark" : "light"
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
                {aboutIntroLink === "skills" && <Skills mode={props.mode} />}
                {/* Experience */}
                {aboutIntroLink === "experience" && (
                  <Experience mode={props.mode} />
                )}
                {/* Education */}
                {aboutIntroLink === "education" && (
                  <Education mode={props.mode} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// import React, { Component } from "react"
// import Skills from "./Skills"

// import Experience from "./Experience"
// import Education from "./Education"

// import Kartik_ProfileIMG2 from "../assets/Kartik_ProfileIMG2.png"
// import CV from "../assets/Kartik_CV.pdf"

// import "./About.css"

// export class About extends Component {
//   constructor() {
//     super()
//     this.state = {
//       aboutIntroLink: "skills",
//     }
//   }
//   render() {
//     const changeAboutIntroLink = (target) => {
//       this.setState({
//         aboutIntroLink: target,
//       })
//       console.log(this.state.aboutIntroLink)
//     }
//     return (
//       <div className="container-fluid" id="about">
//         <div className="row p-5">
//           <div className="col-md-6 col-lg-5 col-xl-4 mt-5" id="aboutProfile">
//             <div id="aboutIMG_CV">
//               <div
//                 className={`profileCard-${this.props.mode} mt-5`}
//                 style={{ padding: "0px" }}
//               >
//                 <img
//                   src={Kartik_ProfileIMG2}
//                   alt="aboutIMG"
//                   className="responsive "
//                   id="profileIMG2"
//                 />
//               </div>
//               <div className="mt-5" id="cv">
//                 <button className="btn" id="BTN">
//                   <a href={CV} id="BTN_Link" download>
//                     Download CV
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-7 col-xl-8 p-5" id="aboutIntro">
//             <div className="mt-4" id="aboutHeading">
//               <h1>About Me</h1>
//             </div>
//             <div id="aboutIntroText">
//               <p>
//                 I am a full-stack developer and will soon complete my bachelor's
//                 degree in computer science at the Frankfurt University of
//                 Applied Sciences. I have good experience in web development.
//                 Below you can get an overview of my skills with various
//                 programming technologies.
//               </p>
//               <p>
//                 My Main Goal is to help & Satisficed the Local & Global Clients
//                 by web development solutions.
//               </p>
//             </div>
//             <div id="aboutIntroLinks">
//               <ul className="nav nav-tabs" id="myTab" role="tablist">
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className={`nav-link text-mode-${
//                       this.props.mode === "light" ? "dark" : "light"
//                     } active`}
//                     id="home-tab"
//                     data-bs-toggle="tab"
//                     data-bs-target="#skills"
//                     type="button"
//                     role="tab"
//                     aria-controls="home"
//                     aria-selected="true"
//                     onClick={() => changeAboutIntroLink("skills")}
//                   >
//                     Skills
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className={`nav-link text-mode-${
//                       this.props.mode === "light" ? "dark" : "light"
//                     }`}
//                     id="profile-tab"
//                     data-bs-toggle="tab"
//                     data-bs-target="#experience"
//                     type="button"
//                     role="tab"
//                     aria-controls="profile"
//                     aria-selected="false"
//                     onClick={() => changeAboutIntroLink("experience")}
//                   >
//                     Experience
//                   </button>
//                 </li>
//                 <li className="nav-item" role="presentation">
//                   <button
//                     className={`nav-link text-mode-${
//                       this.props.mode === "light" ? "dark" : "light"
//                     }`}
//                     id="contact-tab"
//                     data-bs-toggle="tab"
//                     data-bs-target="#education"
//                     type="button"
//                     role="tab"
//                     aria-controls="contact"
//                     aria-selected="false"
//                     onClick={() => changeAboutIntroLink("education")}
//                   >
//                     Education
//                   </button>
//                 </li>
//               </ul>
//               <div className="tab-content" id="myTabContent">
//                 {/* Skills */}
//                 {this.state.aboutIntroLink === "skills" && (
//                   <Skills mode={this.props.mode} />
//                 )}
//                 {/* Experience */}
//                 {this.state.aboutIntroLink === "experience" && (
//                   <Experience mode={this.props.mode} />
//                 )}
//                 {/* Education */}
//                 {this.state.aboutIntroLink === "education" && (
//                   <Education mode={this.props.mode} />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default About
