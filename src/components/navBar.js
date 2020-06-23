import React from "react"
import { Container, Navbar, Nav, Button } from "react-bootstrap"
import navBarStyles from "./navBar.module.css"
import { GiSeahorse } from "react-icons/gi"
import { Link } from "gatsby"

const navBar = ({ pageInfo }) => {
  function handleClick(e) {
    e.preventDefault()
    console.log("The button was clicked.")
  }
  return (
    <Navbar
      bg="light"
      variant="light"
      fixed="top"
      justify-content-between
      expand="lg"
    >
      <Container>
        <Navbar.Brand bsPrefix={navBarStyles.navBrand} href="#home">
          <Link to="/home" activeClassName="active">
            <img
              width="100"
              height="100"
              src={`/logo.png`}
              alt="Plett Beach House logo"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/history" className="nav-link" active>
                History
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/offers" className="nav-link" active>
                Offers
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/amenities" className="nav-link" active>
                Amenities
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/localAttractions" className="nav-link" active>
                Local Attractions
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />

              <Link to="/gallery" className="nav-link" active>
                Gallery
              </Link>
            </div>
            <div className={navBarStyles.navMenuSVG}>
              <GiSeahorse />
              <Link to="/contact" className="nav-link" active>
                Contact
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <Button
          type="button"
          active
          bsPrefix={navBarStyles.bookingBtn}
          href="/contact"
          onClick={handleClick}
        >
          BOOK NOW
        </Button>
      </Container>
    </Navbar>
  )
}

export default navBar
