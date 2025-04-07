import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const whatsappNumber = "+923423742367";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // State to manage the visibility of the scroll-to-top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Effect to handle scroll event and update the state accordingly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container fluid className="px-3">
      <Row>
        <Col
          xs={12}
          className="justify-content-md-between d-flex flex-wrap gap-3   py-5"
        >
          <div className="">
            <h5>Phone</h5>
            <p>+923178212207</p>
          </div>
          <div className="">
            <h5>Email</h5>
            <p>faizan.khanzada4@gmail.com</p>
          </div>
          <div>
            <h5>Follow</h5>
            <div className="justify-content-center d-flex gap-3">
              <a
                href="https://www.facebook.com/faizan.khanzadaa?mibextid=ZbWKwL"
                target="_blank"
                className="fa-brands fa-facebook-f fs-4 hover-icon"
              ></a>
              <a
                href="https://www.instagram.com/faizan_khanzada4/"
                target="_blank"
                className="fa-brands fa-instagram fs-4 hover-icon"
              ></a>
              <a
                href="https://www.linkedin.com/in/faizan-khanzada-347a1a1aa/"
                target="_blank"
                className="fa-brands fa-linkedin fs-4 hover-icon"
              ></a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fa-brands fa-whatsapp fs-4 hover-icon"
              ></a>
              {/* Scroll-to-top button */}
              {showScrollButton && (
                <Button
                  variant="outline-primary"
                  onClick={scrollToTop}
                  className="mybtn rounded-circle"
                  title="Go to top"
                >
                  <FaArrowUp className="btn-arrow" />
                </Button>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
