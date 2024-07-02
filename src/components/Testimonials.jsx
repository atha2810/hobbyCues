import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import "../css/Testimonials.css";

function Testimonials() {
  return (
    <Container className="testimonials-container my-5">
      <Card className="p-4 testimonial-card">
        <Row className="align-items-center mb-3">
          <Col xs={1} className="text-center">
            <div className="quote-icon-bg">
              <FaQuoteLeft className="quote-icon" />
            </div>
          </Col>
          <Col xs={11}>
            <h5 className="testimonial-heading">Testimonials</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Body className="testimonial-content">
              <Card.Text className="testimonial-text">
                In a fast growing and ever changing city like Bangalore, it
                sometimes becomes very difficult to find or connect with like
                minded people. Websites like hobbycue.com is a great service
                which helps me get in touch with, communicate, connect, and
                exchange ideas with other dancers. It also provides the extra
                benefit of finding products and services that I can avail, which
                I can be assured is going to be of great quality as it comes
                recommended by people of the hobbycue community. To have
                discussions, to get visibility, and to be able to safely explore
                various hobbies and activities in my city, all under one roof,
                is an excellent idea and I highly recommend it.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="align-items-center mt-3">
          <Col xs={12} md={9} className="audio-container">
            <div className="audio-block">
              <button className="audio-play-btn">
                <BsFillPlayFill />
              </button>
              <input type="range" className="audio-range" />
              <span className="audio-duration">0:00</span>
            </div>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0"
          >
            <div className="text-center text-md-start">
              <div className="profile-info">Shubha Nagarajan</div>
              <p className="profile-role">Classical Dancer</p>
              <img
                src="./profile.png"
                alt="Shubha Nagarajan"
                className="rounded-circle profile-image me-2"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Testimonials;
