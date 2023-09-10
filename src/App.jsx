import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <div className="app_header_main"></div>
      </div>
      <div className="app_footer"></div>
    </>
  )
}

export default App
