import React from "react"
import { BsLinkedin, BsGithub, BsSkype, BsInstagram } from "react-icons/bs"

import "./Footer.css"

export default function Footer() {
  return (
    <div>
      <div className="container pt-5" id="footer">
        <div className="row  pt-5">
          <div className="col-12" id="socialLinks">
            <a
              href="https://www.linkedin.com/in/kartik-riziya-6b3b83156"
              className="individualSocialIcon"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/kartikriziya"
              className="individualSocialIcon"
            >
              <BsGithub />
            </a>
            <a
              href="https://join.skype.com/invite/GG3H47KNw3js"
              className="individualSocialIcon"
            >
              <BsSkype />
            </a>
            <a
              href="https://www.instagram.com/kartik_riziya/"
              className="individualSocialIcon"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-12" id="copyright">
            <h6>Copyright &copy;2023 All rights reserved.</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
