import React, { Component, useState } from "react"
import Header from "./components/Header"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      mode: "light",
    }
  }
  render() {
    const toggelMode = () => {
      if (this.state.mode === "light") {
        this.setState({
          mode: "dark",
        })
      } else {
        this.setState({
          mode: "light",
        })
      }
    }
    return (
      <>
        <Header mode={this.state.mode} toggelMode={toggelMode} />
      </>
    )
  }
}
