import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown , Container} from 'react-bootstrap';
import Logo from '../images/logo.png'
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => {
  const logoWidth = 150

  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <div className="w-25">
        <a className="navbar-brand" href="http://www.platformable.com" target="_blank"><img src={Logo} alt="Platformable"/></a>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
              {/* <li className="nav-item">    
        <Link className="nav-link" aria-current="page" to="/">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">Pricing</Link>
        </li> */}
        </ul>
        {/*   <div className="login">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link btn btn-warning mx-1 text-white" href="/">Login</a></li>
          <li className="nav-item"><a className="nav-link btn btn-danger mx-1 text-white "  href="/">SignUp</a></li>
        </ul>
      </div> */}
      </div>
    </div>
  </nav>

      {/* 
  <Navbar  expand="lg">
    <Container>
  <Navbar.Brand href="#home"><Link to="/"><img src={Logo} alt="platformable logo"/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-end">
      <Nav.Link href="http://www.platformable.com">Homepage</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> */}
  </>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
