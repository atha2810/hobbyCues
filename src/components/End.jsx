import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import "../css/End.css";

function End() {
  return (
    <Container fluid className="hero-section">
      <Row className="justify-content-start">
        <Col md={8}>
          <h1>
            Your <span className="highlight-hobby">Hobby</span>, Your{" "}
            <span className="highlight-community">Community...</span>
          </h1>
          <Button className="get-started-btn">Get started</Button>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-start">
        <Col xs={12} className="hobby-image">
          <img src="./hobby.png" alt="Hobbies" />
        </Col>
      </Row>
      <Button className="go-to-top-btn" onClick={() => window.scrollTo(0, 0)}>
        <FaArrowUp />
      </Button>
    </Container>
  );
}

export default End;
