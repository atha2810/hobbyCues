import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
import MenuIcon from "@mui/icons-material/Menu";
import "../css/HomeScreen.css";

function HomeScreen() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container
      fluid
      className="d-flex align-items-center min-vh-100 justify-content-center"
      style={{ backgroundColor: "#F7F5F9" }}
    >
      <Row className="w-100 justify-content-center">
        <Col
          md={8}
          lg={6}
          className="d-flex flex-column justify-content-center"
        >
          <div className="leftContainer">
            <Navbar expand="lg" className="d-lg-none">
              <Navbar.Collapse
                id="basic-navbar-nav"
                className={showMenu ? "show" : ""}
              >
                <Nav className="mr-auto flex-column">
                  <Nav.Link onClick={() => setIsSignIn(true)}>Sign In</Nav.Link>
                  <Nav.Link onClick={() => setIsSignIn(false)}>
                    Join In
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <h1
              style={{
                fontFamily: "semibold",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Explore your <span className="highlight-blue">hobby</span> or{" "}
              <span className="highlight-purple">passion</span>
            </h1>
            <p>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities...
            </p>
            <p>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
            <img src="./hobby_image.png" alt="Hobby" className="img-fluid" />
          </div>
        </Col>
        <Col
          md={8}
          lg={6}
          className="rightContainer d-flex flex-column justify-content-center form-container"
        >
          <Nav fill variant="tabs" className="mb-3 d-none d-lg-flex">
            <Nav.Item>
              <Nav.Link
                eventKey="signin"
                onClick={() => setIsSignIn(true)}
                className={isSignIn ? "active-tab" : "inactive-tab"}
              >
                <span>Sign In</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="joinin"
                onClick={() => setIsSignIn(false)}
                className={!isSignIn ? "active-tab" : "inactive-tab"}
              >
                Join In
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Form className="px-4">
            {isSignIn ? (
              <>
                <Button
                  variant="outline-primary"
                  className="mb-2 d-flex align-items-center custom-button"
                >
                  <img
                    src="./Google.png"
                    className="google-icon"
                    alt="googleLogos"
                  />{" "}
                  <span style={{ paddingLeft: "150px" }}>
                    Continue with Google
                  </span>
                </Button>
                <Button
                  variant="outline-primary"
                  className="mb-2 d-flex align-items-center custom-button"
                >
                  <FacebookOutlinedIcon className="facebook-icon" />{" "}
                  <span style={{ paddingLeft: "150px" }}>
                    Continue with Facebook
                  </span>
                </Button>
                <div className="text-center my-2">or connect with</div>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="custom-input"
                  />
                </Form.Group>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="custom-input"
                  />
                </InputGroup>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" label="Remember me" />
                  <a href="#forgot-password">
                    <LockIcon className="me-1 light-grey-icon" /> Forgot
                    password?
                  </a>
                </Form.Group>
                <Button
                  variant="outline-primary"
                  type="submit"
                  className="custom-button active-button"
                >
                  Continue
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline-primary"
                  className="mb-2 d-flex align-items-center custom-button"
                  style={{
                    color: "#8064A2",
                    backgroundColor: "white",
                    borderColor: "#8064A2",
                  }}
                >
                  <GoogleIcon className="google-icon" />{" "}
                  <span style={{ paddingLeft: "150px" }}>
                    Continue with Google
                  </span>
                </Button>
                <Button
                  variant="outline-primary"
                  className="mb-2 d-flex align-items-center custom-button"
                  style={{
                    color: "#8064A2",
                    backgroundColor: "white",
                    borderColor: "#8064A2",
                  }}
                >
                  <FacebookOutlinedIcon className="facebook-icon" />{" "}
                  <span style={{ paddingLeft: "150px" }}>
                    Continue with Facebook
                  </span>
                </Button>
                <div className="text-center my-2">or connect with</div>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="custom-input"
                  />
                </Form.Group>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="custom-input"
                  />
                  <InputGroup.Text className="custom-input">
                    <VisibilityIcon />
                  </InputGroup.Text>
                </InputGroup>
                <div className="mb-3">
                  By continuing, you agree to our <b>Terms of Service</b> and{" "}
                  <b>Privacy Policy</b>.
                </div>
                <Button
                  type="submit"
                  className="custom-button"
                  style={{
                    color: "#8064A2",
                    backgroundColor: "white",
                    borderColor: "#8064A2",
                  }}
                >
                  Agree and Continue
                </Button>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
