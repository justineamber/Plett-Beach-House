import React from "react"
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap"
import navBarStyles from "./nav-bar.module.css"
import { GiSeahorse, GiPresent, GiPhone } from "react-icons/gi"
import { Link } from "gatsby"
import Img from "gatsby-image"

const NavBar = ({ pageInfo, logoImage }) => {
  function handleClick(e) {
    e.preventDefault()
  }
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand bsPrefix={navBarStyles.navBrand}>
          <Link to="/home" className="active">
            <Img
              fixed={logoImage}
              width="100"
              height="100"
              alt="Site logo"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <div className={navBarStyles.menuCenterMobile}>
          <a href="/offers">
            <GiPresent className={navBarStyles.svgGiftMobileViewWrapper} />
          </a>
          <a href="tel:+4796801110">
            <GiPhone className={navBarStyles.svgPhoneMobileViewWrapper} />
          </a>
        </div>
        <div className={navBarStyles.menuLeftMobile}>
          <a className={navBarStyles.logoStyleMobile} href="/home">
            Entabene
          </a>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className={navBarStyles.navStyles}
            activeKey={pageInfo && pageInfo.pageName}
          >
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <NavDropdown title="History" id="collasible-nav-dropdown">
                <Link to="/history" className="nav-link">
                  <NavDropdown.Item href="#history">History</NavDropdown.Item>
                </Link>
                <Link to="/location" className="nav-link">
                  <NavDropdown.Item href="#location">Location</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </div>

            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/offers" className="nav-link">
                Offers
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/amenities" className="nav-link">
                Amenities
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/local-attractions" className="nav-link">
                Local Attractions
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />

              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </Nav>
          <Link to="/contact" className="nav-link">
            <Button type="button" active onClick={handleClick} variant="dark">
              Book accomodation
            </Button>
          </Link>
          <Link to="/interests" className="nav-link">
            <Button
              type="button"
              active
              onClick={handleClick}
              variant="primary"
            >
              Book things to do
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
