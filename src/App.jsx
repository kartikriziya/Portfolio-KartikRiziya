import React, { Component, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"

import About from "./components/About"

import "./App.css"
import Services from "./components/Services"
import Contact from "./components/Contact"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      mode: "dark",
    }
    document.body.style.backgroundColor = "#212529"
  }

  render() {
    const toggelMode = () => {
      if (this.state.mode === "light") {
        this.setState({
          mode: "dark",
        })
        document.body.style.backgroundColor = "#212529"
      } else {
        this.setState({
          mode: "light",
        })
        document.body.style.backgroundColor = "#f8f9fa"
      }
    }
    return (
      <>
        <div
          className={`container-fluid bg-mode-${this.state.mode} text-mode-${
            this.state.mode === "light" ? "dark" : "light"
          }`}
        >
          <Header mode={this.state.mode} toggelMode={toggelMode} />
          <Home mode={this.state.mode} />
          <About mode={this.state.mode} />
          <Services mode={this.state.mode} />
          <Contact mode={this.state.mode} />
        </div>
      </>
    )
  }
}
