import React, { Component, useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

import "./App.css"
import { gsap, Power3 } from "gsap"

export default function App() {
  const [mode, setMode] = useState("dark")

  // gsap
  let tl = new gsap.timeline()
  let ease = Power3.easeOut()

  useEffect(() => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#f8f9fa"
    } else {
      document.body.style.backgroundColor = "#212529"
    }
  })

  // toggelMode function
  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }
  return (
    <div>
      <div
        className={`container-fluid bg-mode-${mode} text-mode-${
          mode === "light" ? "dark" : "light"
        }`}
      >
        <Header mode={mode} toggelMode={toggelMode} timeline={tl} ease={ease} />
        <Home mode={mode} />
        <About mode={mode} />
        <Services mode={mode} />
        <Contact mode={mode} />
      </div>
    </div>
  )
}

// import React, { Component, useState } from "react"
// import Header from "./components/Header"
// import Home from "./components/Home"
// import About from "./components/About"
// import Services from "./components/Services"
// import Contact from "./components/Contact"

// import "./App.css"
// import { gsap, Power3 } from "gsap"

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       mode: "dark",
//     }
//     document.body.style.backgroundColor = "#212529"
//   }

//   render() {
//     // toggelMode function
//     const toggelMode = () => {
//       if (this.state.mode === "light") {
//         this.setState({
//           mode: "dark",
//         })
//         document.body.style.backgroundColor = "#212529"
//       } else {
//         this.setState({
//           mode: "light",
//         })
//         document.body.style.backgroundColor = "#f8f9fa"
//       }
//     }

//     // gsap
//     let tl = new gsap.timeline()
//     let ease = Power3.easeOut()

//     return (
//       <>
//         <div
//           className={`container-fluid bg-mode-${this.state.mode} text-mode-${
//             this.state.mode === "light" ? "dark" : "light"
//           }`}
//         >
//           <Header
//             mode={this.state.mode}
//             toggelMode={toggelMode}
//             timeline={tl}
//             ease={ease}
//           />
//           <Home mode={this.state.mode} />
//           <About mode={this.state.mode} />
//           <Services mode={this.state.mode} />
//           <Contact mode={this.state.mode} />
//         </div>
//       </>
//     )
//   }
// }
