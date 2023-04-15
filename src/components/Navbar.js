import React from 'react'
import {Container,Nav, Navbar} from "react-bootstrap"
import logo from "../assests/logo.png"
import "../styles/Middle.css"

function Navb() {
  return (
    <div>
        <Navbar id="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><img class="logo1" src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle id="tog" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link id="home" href="https://beamish-paletas-d834d7.netlify.app/" className="txt">Home</Nav.Link>
            <Nav.Link eventKey={2} href="https://chipper-crepe-8f1143.netlify.app/" className="txt" target='_blank' >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navb