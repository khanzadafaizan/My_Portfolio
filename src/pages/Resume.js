import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../images/profile.jpg";
function Resume() {
  const cvData = [
    {
      id: "1",
      subject: "Experience",
      title: "",
      time: "Front-End Web Developer",
      company: "",
      description:
        "Responsible for developing and maintaining front-end components of web applications. Utilized React.js and React Router for building dynamic user interfaces. Collaborated with back-end developers to integrate front-end components with RESTful APIs",
    },
    {
      id: "2",
      subject: "",
      title: "Shift Supervisor",
      time: "2014 - Present",
      company: "Base Camp Data Solutions",
      description:
        "My work is to manage a team of employees, ensuring that they are performing their duties effectively.",
    },
    {
      id: "3",
      subject: "Education",
      title: "Bachelor of Sciences",
      time: "2012-2014",
      company: "University of Sindh Jamshoro",
      description: "",
    },
  ];
  return (
    <Container id="resume">
      <Row>
        <div className="about-div">
          <h1 className="about text-center">RESUME</h1>
          <p className="about-text text-center">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <Col className="mt-3 ">
          <Row className="mx-1 my-2 resume_bg py-4 ">
            <h3 className="text-center">Faizan Khanzada</h3>
            <p className="text-center">Front-End Web Developer</p>

            <Col sm={12} className="d-flex justify-content-between">
              <div className="resume_data_div">
                <h5>
                  Location:{" "}
                  <span className="fs-6 fw-normal">Hyderabad, Pakistan</span>
                </h5>
                <h5>
                  Phone:{" "}
                  <span className="fs-6 fw-normal">
                    +923178212207, +923423742367
                  </span>
                </h5>
                <h5>
                  Email:{" "}
                  <span className="fs-6 fw-normal ">
                    faizan.khanzada4@gmail.com
                  </span>
                </h5>
                <h5>
                  LinkedIn:{" "}
                  <span>
                    <a
                      href="https://www.linkedin.com/in/faizan-khanzada-347a1a1aa/"
                      target="blank"
                      className="fs-6 fw-normal"
                    >
                      faizan_khanzada
                    </a>{" "}
                  </span>
                </h5>
                <h5>
                  GitHub:{" "}
                  <span>
                    <a
                      href="https://github.com/khanzadafaizan"
                      target="blank"
                      className="fs-6 fw-normal"
                    >
                      khanzadafaizan
                    </a>{" "}
                  </span>
                </h5>
              </div>
              <div className="resume_img_div">
                <img src={image} className="img-fluid"></img>
              </div>
            </Col>
          </Row>
          <Row className=" mx-1 my-2 resume_bg py-4">
            <Col sm={12} className="">
              <h5 className="text-center">Summary</h5>
              <p className="text-center">
                Experienced front-end web developer passionate about creating
                responsive and user-friendly web applications. Proficient in
                HTML, CSS, JavaScript, and various front-end frameworks like
                Bootstrap, Tailwind CSS, React.js, and Next.js. Skilled in
                converting designs into functional websites and optimizing code
                for performance and efficiency.
              </p>
            </Col>
          </Row>
          {cvData.map((detail, key) => (
            <Row className=" mx-1 my-2 resume_bg py-4 " key={key}>
              <h5>{detail.subject}</h5>

              <Col xs={12} md={4} className="p-md-5 p-2">
                <h5 className=" fw-bold">{detail.time}</h5>
                <h5 className="pt-1">{detail.company}</h5>
              </Col>
              <Col xs={12} md={8} className="p-md-5 p-2 pt-5 ">
                <h5>{detail.title}</h5>
                <p>{detail.description}</p>
              </Col>
            </Row>
          ))}
          <Row className="mx-1 my-2 resume_bg py-4 ">
            <h5 className="pb-3">Certification</h5>
            <Col sm={6} className="p-md-5 p-2 pt-5">
              <h5>Diploma in Computer and Business skills</h5>
              <p>Khana-e-Farhang Iran Hyderabad</p>
            </Col>
            <Col sm={6} className="p-md-5 p-2 pt-5">
              <h5>Web Development</h5>
              <p>National Vocational & Technical Training Commission</p>
            </Col>
          </Row>
          <Row className="mx-1 my-2 resume_bg py-4 ">
            <h5 className="pb-3">Technical Skills</h5>
            <Col sm={12} className="p-md-5 p-2 pt-5">
              <div className="d-flex flex-wrap gap-1">
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
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
