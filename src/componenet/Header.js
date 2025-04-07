import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTheme } from "../theme-context";
import Moon from "../images/moon.svg";
import Sun from "../images/sun.svg";
import image from "../images/profile.jpg";
import { Link } from "react-scroll";
import Form from "react-bootstrap/Form";
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar expand="md" className="py-3">
      <Container fluid className="px-3">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={theme === "light" ? "bg" : "bg-body-tertiary"}
        />

        <div className="img-div mt-2 profile d-none d-md-block">
          <img src={image} className="" alt="profile" />
        </div>
        <Navbar.Brand className=" brand py-2 ps-2">
          <Link to="hero" spy={true} smooth={true} duration={300}>
            Faizan Khanzada
          </Link>
        </Navbar.Brand>

        <span
          onClick={toggleTheme}
          checked={theme === "light"}
          className="d-block d-md-none"
        >
          {theme === "light" ? (
            <img src={Moon} className="image" alt="moon" />
          ) : (
            <img src={Sun} className="image" alt="sun" />
          )}
        </span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <Nav.Link
              as={Link}
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
            >
              Project
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="resume"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
            >
              Resume
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={300}
            >
              Contact
            </Nav.Link>
          </Nav>

          <span
            onClick={toggleTheme}
            checked={theme === "light"}
            className="d-none d-md-block"
          >
            {theme === "light" ? (
              <img src={Moon} className="image" alt="moon" />
            ) : (
              <img src={Sun} className="image" alt="sun" />
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
