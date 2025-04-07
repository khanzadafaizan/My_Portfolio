import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoIosLink } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

function Work() {
  const projects = [
    {
      id: "1",
      title: "Tarbay Center",
      description:
        "I developed this project using React.js with Bootstrap and custom CSS. I converted the design from Figma to React.js, implementing routing and reusable components, while ensuring the design remained consistent across all platforms.",
      image: require("../images/projects/tarbay.png"),
      gitHub: "http://github.com/khanzadafaizan/Tarbay_Center",
      projectLink: "http://tarbay-center.vercel.app",
    },
    {
      id: "2",
      title: "Paysa",
      description:
        "Developed this project using React.js, with Bootstrap and custom CSS. I converted the design from Figma to React.js, implementing routing, components, props, and conditional rendering, while optimizing the code for improved performance and user interaction, ensuring design consistency across both desktop and mobile platforms.",
      image: require("../images/projects/dashborad.png"),
      gitHub: "http://github.com/khanzadafaizan/Paysa",
      projectLink: "http://paysa-three.vercel.app/dashborad",
    },
    {
      id: "3",
      title: "Uppcar",
      description:
        "Developed this project with React.js, using Bootstrap and custom CSS. I converted the design from other website to React.js, implementing routing, components, props, and conditional rendering while optimizing the code for improved performance and user interaction, ensuring the design remained consistent across all platforms.",
      image: require("../images/projects/uppcar.jpg"),
      gitHub: "http://github.com/khanzadafaizan/Uppcar",
      projectLink: "http://uppcar-nn7e.vercel.app",
    },
    {
      id: "4",
      title: "Coral",
      description:
        "This project was built using Next.js and Tailwind CSS, integrating a GraphQL API to create an e-commerce-style website. The focus was on improving performance and user experience, using Next.js for fast rendering.",
      image: require("../images/projects/coral.jpg"),
      gitHub: "http://github.com/khanzadafaizan/Nextjs-Ecommerce-Store",
      projectLink: "http://nextjs-ecommerce-store-1qgb.vercel.app/?tag=fries",
    },
    {
      id: "5",
      title: "Portfolio",
      description:
        "This project is built with React.js, React Bootstrap, and CSS, dynamically passing data using React Router, props, and incorporating a carousel slider functionality. It aims to enhance user interaction by seamlessly navigating content with React Router, while the carousel slider enriches the experience with visually appealing and interactive content presentation.",
      image: require("../images/projects/portfolio.jpg"),
      gitHub: "http://github.com/khanzadafaizan/graphic_designer_portfolio",
      projectLink: "http://amaan-khanzada-portfolio.vercel.app",
    },
    {
      id: "6",
      title: "PhotoFolio",
      description:
        "This project was downloaded from Google and directly converted to React.js without any additional modifications or enhancements.",
      image: require("../images/projects/photofolio.jpg"),
      gitHub: "http://github.com/khanzadafaizan/PhotoFolio",
      projectLink: "http://photo-folio-jade.vercel.app",
    },
    {
      id: "7",
      title: "Blog",
      description:
        "This project utilizes Next.js and Tailwind CSS along with a content management system to implement dynamic routes. It fetches API data from JSON to display information about all users and individual users.",
      image: require("../images/projects/blog.jpg"),
      gitHub: "http://github.com/khanzadafaizan/Blog-Next.js",
      projectLink: "http://blog-next-js-ivory-iota.vercel.app",
    },
  ];
  return (
    <Container id="project" className="">
      <Row>
        <div className="about-div">
          <h1 className="about text-center">PROJECT</h1>
          <p className="about-text text-center">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
          </p>
        </div>

        {projects.map((item, key) => (
          <>
            <Col xs={12} sm={12} md={6} className="mt-5 px-3">
              <h2 className="py-3">{item.title}</h2>
              <p>{item.description}</p>
            </Col>
            <Col xs={12} sm={12} md={6} className="mt-2 mt-md-5">
              <div className="my-0 my-md-3">
                <a href={item.image} target="blank" className="">
                  <img src={item.image} className="mt-3 img-fluid"></img>
                </a>

                <div className="s d-flex gap-2 fs-5 py-1">
                  <a href={item.gitHub} target="blank" className="">
                    <IoIosLink />
                  </a>
                  <a href={item.projectLink} target="blank" className="">
                    <FaGooglePlay />
                  </a>
                </div>
              </div>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}

export default Work;
