import React, { useEffect, useRef } from "react"

import "./LoadingPage.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function LoadingPage(props) {
  let tl = props.timeline
  let loadingPage = useRef(null)

  useEffect(() => {
    function loaderTime() {
      var loaderPercentage = 0

      setInterval(function () {
        loaderPercentage += Math.floor(Math.random() * 20)

        if (loaderPercentage < 100) {
          document.querySelector("#loaderText").innerHTML =
            loaderPercentage + "%"
        } else {
          loaderPercentage = 100
          document.querySelector("#loaderText").innerHTML =
            loaderPercentage + "%"
        }
      }, 150)
    }
    let ctx = gsap.context(() => {
      gsap.from("#svgName", {
        opacity: 0,
        y: 21,
        delay: 0.5,
        duration: 1,
      })
      tl.to("#loaderText", {
        delay: 0.5,
        duration: 1,
        onStart: loaderTime(),
      })
      tl.to("#loadingPage", {
        opacity: 0,
        // top: "-100vh",
        delay: 1,
        duration: 1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div>
      <div
        className="container"
        id="loadingPage"
        ref={(el) => (loadingPage = el)}
      >
        <div className="row">
          <div className="col-12" id="loader">
            {/* <h1 id="loaderText">Hello...</h1> */}
            <div id="svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 215"
                id="svg"
              >
                <path
                  d="M 113.892 26.682 C 112.458 28.232, 99.192 44.575, 84.411 63 C 69.631 81.425, 51.769 103.655, 44.719 112.400 C 37.670 121.145, 32.116 128.861, 32.379 129.545 C 33.055 131.308, 74.968 185.236, 76.838 186.750 C 79.161 188.631, 94.889 188.452, 95.624 186.536 C 95.973 185.628, 88.252 174.724, 75.266 157.786 C 63.761 142.779, 54.018 129.939, 53.616 129.253 C 53.175 128.500, 54.610 125.888, 57.239 122.662 L 61.592 117.318 76.046 135.791 C 83.996 145.951, 96.381 161.742, 103.568 170.882 L 116.636 187.500 125.165 187.787 C 131.198 187.989, 134.007 187.697, 134.763 186.786 C 135.573 185.809, 128.252 175.637, 104.427 144.635 C 86.629 121.476, 73.315 103.280, 73.698 102.636 C 74.069 102.011, 81.186 93.175, 89.513 83 C 122.469 42.730, 135.075 26.678, 134.305 25.965 C 133.862 25.554, 129.675 24.914, 125 24.541 C 116.586 23.871, 116.474 23.893, 113.892 26.682 M 62.741 40.250 C 55.947 48.638, 41.752 66.231, 31.196 79.348 L 12.003 103.195 13.909 105.848 C 14.957 107.306, 17.335 110.248, 19.193 112.384 L 22.570 116.268 52.625 78.884 C 69.155 58.323, 85.406 38.125, 88.739 34 C 92.071 29.875, 94.592 26.163, 94.340 25.750 C 94.088 25.337, 89.655 25, 84.488 25 L 75.095 25 62.741 40.250 M 145.750 36.973 C 143.137 40.250, 141 43.157, 141 43.434 C 141 43.712, 143.363 45.466, 146.250 47.333 C 153.121 51.777, 155.307 54.268, 158.682 61.503 C 161.127 66.744, 161.480 68.697, 161.483 77 C 161.486 85.923, 161.278 86.885, 158.059 92.834 C 150.567 106.681, 136.944 112.955, 114.309 112.985 C 108.154 112.993, 102.854 113.427, 102.532 113.949 C 102.209 114.470, 113.995 131.008, 128.723 150.699 L 155.500 186.500 165 186.500 C 171.837 186.500, 174.500 186.156, 174.500 185.273 C 174.500 184.599, 165.112 171.412, 153.637 155.969 C 142.163 140.527, 132.938 127.733, 133.137 127.538 C 133.337 127.344, 136.200 126.696, 139.500 126.099 C 157.728 122.799, 173.711 107.725, 178.508 89.307 C 182.770 72.944, 177.783 53.672, 166.187 41.690 C 162.517 37.898, 152.913 30.993, 151.331 31.008 C 150.874 31.013, 148.363 33.697, 145.750 36.973"
                  fill-rule="evenodd"
                />
                <path d="" stroke="none" fill="#fc7c04" fill-rule="evenodd" />
              </svg>
            </div>
            <h1 id="svgName">Kartik Riziya</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
