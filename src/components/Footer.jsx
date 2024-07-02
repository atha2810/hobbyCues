import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaGooglePlusG,
  FaYoutube,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <h5 className="footer-title">Hobbycue</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">How Do I</h5>
            <ul className="list-unstyled">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="footer-title">Social Media</h5>
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <FaFacebookF />
              </li>
              <li className="list-inline-item">
                <FaTwitter />
              </li>
              <li className="list-inline-item">
                <FaInstagram />
              </li>
              <li className="list-inline-item">
                <FaPinterestP />
              </li>
              <li className="list-inline-item">
                <FaGooglePlusG />
              </li>
              <li className="list-inline-item">
                <FaYoutube />
              </li>
              <li className="list-inline-item">
                <FaTelegramPlane />
              </li>
              <li className="list-inline-item">
                <FaEnvelope />
              </li>
            </ul>
            <h5 className="footer-title mt-4">Invite Friends</h5>
            <Form inline className="invite-form">
              <Form.Control
                type="email"
                placeholder="Email ID"
                className="mr-2"
              />
              <Button className="invite-button">Invite</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="footer-copyright">© Purple Cues Private Limited</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
