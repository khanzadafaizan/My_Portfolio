import React from "react";
import { Link, ScrollLink } from "react-scroll";
import { Row, Col, Button, Container } from "react-bootstrap";
import image from "../images/profile.jpg";
function Profile() {
  return (
    <Container id="hero" className="mb-5 py-5">
      <Row className="py-2 py-md-5">
        <Col
          sm={12}
          className="pt-5 d-flex align-items-center text-center flex-column d-block d-md-none"
        >
          <div className="profile">
            <img src={image} className="" />
          </div>
          <h1 className="pt-2 pt-md-5 intro d-block d-md-none">
            Faizan Khanzada
          </h1>
          <p className="pt-2 pt-md-5 intro-text d-block d-md-none">
            Front-End Web Developer{" "}
          </p>
        </Col>
        <Col className="pt-2 pt-md-5  d-flex align-items-center text-center flex-column">
          <h1 className="pt-2 pt-md-5 intro d-none d-md-block">
            Hey, I'M Faizan Khanzada
          </h1>
          <p className="w-50 pt-2 pt-md-3 intro-text d-none d-md-block">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={300}
            className=""
          >
            <Button className="px-5 py-2 mt-2 mt-md-3">PROJECT</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
