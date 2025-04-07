import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <Container id="about" className="">
      <Row>
        <div className="about-div">
          <h1 className="about text-center">ABOUT ME</h1>
          <p className="about-text text-center">
            You'll find a comprehensive overview of my background, skills, and
            expertise in programming and technology
          </p>
        </div>
        <Col xs={12} sm={12} md={6} className="mt-5 px-5">
          <h2 className="py-5">Get to know me!</h2>
          <p>
            I completed a three-month internship at{" "}
            <span className="h6"> GMG Solutions,</span> focusing on Frontend
            Development. Although I haven't actively engaged on LinkedIn, you
            can find my work on GitHub. As a{" "}
            <span className="h6"> Frontend Focused Web Developer </span>{" "}
            building and managing the Frontend of Websites and Web Applications
            to ensure the success of the overall product. Check out some of my
            projects in the Projects section.
          </p>
          <p>
            I also enjoy sharing content related to what I've learned over the
            year in <span className="h6">Web Development</span>. Feel free to
            connect or follow me on{" "}
            <a
              href="https://www.linkedin.com/in/faizan-khanzada-347a1a1aa/"
              target="_blank"
              className="h6 text-primary"
            >
              Linkedin
            </a>
            .
          </p>
          <p>
            I'm open to <span className="h6">Job</span> opportunities where I
            can contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to{" "}
            <span className="h6">contact</span> me.
          </p>
        </Col>
        <Col xs={12} sm={12} md={6} className="mt-5">
          <h2 className="py-5">My Skills</h2>
          <div className="d-flex flex-reverse flex-wrap gap-2">
            <div className="skills">HTML</div>
            <div className="skills">CSS</div>
            <div className="skills">bootStrap</div>
            <div className="skills">Tailwind css</div>
            <div className="skills">JavaScript</div>
            <div className="skills">Terminal</div>
            <div className="skills">Responsive Design</div>
            <div className="skills">React.js</div>
            <div className="skills">Next.js</div>
            <div className="skills">GIT</div>
            <div className="skills">GitHub</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
