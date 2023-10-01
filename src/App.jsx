import React, { Component, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"

import "./App.css"
import About from "./components/About"

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
        </div>
      </>
    )
  }
}
