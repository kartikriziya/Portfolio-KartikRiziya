import React, { Component, createRef, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import companyLogo from '../assets/bootstrap-logo.svg'
import './Header.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Header(props) {
  let tl = props.timeline
  let headerNavbar = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from('.navbar-brand', 0.7, { opacity: 0, x: '-100' }).from(
        '.nav-item',
        0.8,
        {
          opacity: 0,
          y: '-100',
          stagger: { amount: 0.7 },
          ease: props.ease,
        }
      )
      gsap.from('#toggleModeSwitch', 0.7, {
        opacity: 0,
        x: '100',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-md navbar-${props.mode} bg-${props.mode} headerNavbar`}
        id='headerNavbar'
        ref={(el) => (headerNavbar = el)}
      >
        <div className='container' id='headerNavbar'>
          <a className='navbar-brand' href='#'>
            {/* <img
                src={companyLogo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              /> */}
            <b>
              Portfo
              <span id='logoEnd' style={{ color: '#ff7b00' }}>
                lio
              </span>
              .
            </b>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item '>
                <a className='nav-link active ' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link  ' aria-current='page' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link  ' aria-current='page' href='#services'>
                  Services
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link  ' aria-current='page' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>

            {/* toggleMode Switch */}
            <div
              className={`form-check form-switch text-mode-${
                props.mode === 'light' ? 'dark' : 'light'
              }`}
              id='toggleModeSwitch'
            >
              <input
                className='form-check-input'
                onClick={props.toggelMode}
                type='checkbox'
                id='flexSwitchCheckDefault'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Enable LightMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
