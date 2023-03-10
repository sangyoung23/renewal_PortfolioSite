import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

function Header() {
  return (
    <div>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "99",
        }}
      >
        <Container>
          <Navbar.Brand href="">Yong's portfolio ✨</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home" spy={true} smooth={true}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="about" spy={true} smooth={true}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="skill" spy={true} smooth={true}>
                Skill
              </Nav.Link>
              <Nav.Link as={Link} to="project" spy={true} smooth={true}>
                Project
              </Nav.Link>
              <Nav.Link as={Link} to="community" spy={true} smooth={true}>
                Community
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
