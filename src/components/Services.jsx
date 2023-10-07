import React from "react"

import WWW from "../assets/www.png"
import Design from "../assets/design.png"
import Code from "../assets/code.png"

import "./Services.css"

export default function Services(props) {
  return (
    <div>
      <div className="container-fluid" id="services">
        <div className="row">
          <div className="col-12 p-5">
            <div className="ps-5" id="servicesHeading">
              <h1>Services</h1>
            </div>
          </div>
        </div>

        <div className="row ps-5 pe-5">
          <div className="col-md-6 col-xl-4 mb-5 ps-5 pe-5">
            <div className={`serviceCard-${props.mode}`}>
              <div className="row">
                <div className="col-12">
                  <div id="serviceIMG_Head">
                    <img src={WWW} alt="web" id="serviceIMG" />
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
            <div className={`serviceCard-${props.mode}`}>
              <div className="row">
                <div className="col-12">
                  <div id="serviceIMG_Head">
                    <img src={Design} alt="web" id="serviceIMG" />
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
            <div className={`serviceCard-${props.mode}`}>
              <div className="row">
                <div className="col-12">
                  <div id="serviceIMG_Head">
                    <img src={Code} alt="web" id="serviceIMG" />
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

// import React, { Component } from "react"

// import WWW from "../assets/www.png"
// import Design from "../assets/design.png"
// import Code from "../assets/code.png"

// import "./Services.css"

// export class Services extends Component {
//   render() {
//     return (
//       <div>
//         <div className="container-fluid" id="services">
//           <div className="row">
//             <div className="col-12 p-5">
//               <div className="ps-5" id="servicesHeading">
//                 <h1>Services</h1>
//               </div>
//             </div>
//           </div>

//           <div className="row ps-5 pe-5">
//             <div className="col-md-6 col-xl-4 mb-5 ps-5 pe-5">
//               <div className={`serviceCard-${this.props.mode}`}>
//                 <div className="row">
//                   <div className="col-12">
//                     <div id="serviceIMG_Head">
//                       <img src={WWW} alt="web" id="serviceIMG" />
//                       <h1>Web Development</h1>
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div id="serviceIntro">
//                       <p>
//                         My mission is to design and develop a website that you
//                         and your audience love. Primary role is to ensure the
//                         website is visually appealing and easy to navigate
//                       </p>
//                       <p>
//                         I develop a single-page Website so that it doesn't load
//                         when the Webpage changes
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 col-xl-4 mb-5 ps-5 pe-5">
//               <div className={`serviceCard-${this.props.mode}`}>
//                 <div className="row">
//                   <div className="col-12">
//                     <div id="serviceIMG_Head">
//                       <img src={Design} alt="web" id="serviceIMG" />
//                       <h1>Web Design</h1>
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div id="serviceIntro">
//                       <p>
//                         I ensure that the website is responsive, meaning that
//                         the website has the same interface no matter what device
//                         is being browsed on
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6 col-xl-4 mb-5 ps-5 pe-5">
//               <div className={`serviceCard-${this.props.mode}`}>
//                 <div className="row">
//                   <div className="col-12">
//                     <div id="serviceIMG_Head">
//                       <img src={Code} alt="web" id="serviceIMG" />
//                       <h1>App Development</h1>
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div id="serviceIntro">
//                       <p>
//                         I design creative prototypes according to
//                         specifications.
//                       </p>
//                       <p>
//                         Also, I develop Microsoft Access Databases, including
//                         tables, queries, forms and reports, using standard IT
//                         processes, with data normalization and referential
//                         integrity. Use Visual Basic in Microsoft Applications,
//                         including Excel, Access, Word and PowerPoint.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Services
