import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import Logo from "../images/logo.png"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const logoWidth = 150

  return (
    <>
     

      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src="https://platformable.com/_next/static/media/Platformable-logo.a34d0147.png"
              alt="Logo"
              width={'200px'}
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item main-color ">
                <a class="nav-link text-bold" href="http://www.platformable.com" target="_blank">
                  Go to platformable.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
