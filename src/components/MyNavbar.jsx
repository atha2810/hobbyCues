import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import "../css/MyNavbar.css";

const MyNavbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img src="logo.png" alt="hobbycue logo" height="50" />
      </Navbar.Brand>
      <div className="d-flex ms-auto align-items-center">
        {isMobile && (
          <>
            <Nav.Link href="#search" className="me-2">
              <SearchIcon style={{ color: "#8064A2" }} />
            </Nav.Link>
            <Nav.Link href="#notifications" className="me-2">
              <NotificationsIcon style={{ color: "#8064A2" }} />
            </Nav.Link>
          </>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        {!isMobile && (
          <Form className="d-flex mx-auto" style={{ maxWidth: "400px" }}>
            <FormControl
              type="text"
              placeholder="Search here..."
              className="me-2"
              style={{ borderRadius: "8px 0 0 8px" }}
            />
            <Button
              variant="primary"
              style={{
                borderRadius: "0 8px 8px 0",
                backgroundColor: "#8064A2",
              }}
            >
              <SearchIcon />
            </Button>
          </Form>
        )}
        {!isMobile && (
          <Nav className="ms-auto d-flex align-items-center">
            <NavDropdown
              title={
                <span className="d-flex align-items-center">
                  <ExploreIcon style={{ color: "#8064A2" }} className="me-1" />
                  Explore
                </span>
              }
              id="explore-dropdown"
              className="me-2"
            >
              <NavDropdown.Item href="#explore/action1">
                People - Community
              </NavDropdown.Item>
              <NavDropdown.Item href="#explore/action2">
                Places - Venues
              </NavDropdown.Item>
              <NavDropdown.Item href="#explore/action3">
                Program - Events
              </NavDropdown.Item>
              <NavDropdown.Item href="#explore/action4">
                Products - Store
              </NavDropdown.Item>
              <NavDropdown.Item href="#explore/action5">Blogs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span className="d-flex align-items-center">
                  <LocalActivityIcon
                    style={{ color: "#8064A2" }}
                    className="me-1"
                  />
                  Hobbies
                </span>
              }
              id="hobbies-dropdown"
              className="me-2"
            >
              <NavDropdown.Item href="#hobbies/action1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#hobbies/action2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#hobbies/action3">
                Something else
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#bookmarks" className="me-2">
              <BookmarkIcon style={{ color: "#8064A2" }} />
            </Nav.Link>
            <Nav.Link href="#notifications" className="me-2">
              <NotificationsIcon style={{ color: "#8064A2" }} />
            </Nav.Link>
            <Nav.Link href="#cart" className="me-2">
              <ShoppingCartIcon style={{ color: "#8064A2" }} />
            </Nav.Link>
            <Button
              style={{
                backgroundColor: "white",
                color: "#8064A2",
                borderColor: "#8064A2",
                borderWidth: "1px",
              }}
            >
              Sign In
            </Button>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
