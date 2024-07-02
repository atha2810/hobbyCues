import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PeopleIcon from "@mui/icons-material/People";
import PlaceIcon from "@mui/icons-material/Place";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import EventIcon from "@mui/icons-material/Event";
import "../css/Features.css";

function Features() {
  return (
    <div className="features-container">
      <Container className="my-5">
        <Row>
          <Col md={6} className="mb-4">
            <Card className="h-100 card-custom">
              <Card.Body className="people">
                <Card.Title className="d-flex align-items-center">
                  <PeopleIcon
                    style={{ color: "purple", marginRight: "10px" }}
                  />
                  People
                </Card.Title>
                <Card.Text>
                  Find a teacher, coach, or expert for your hobby interest in
                  your locality. Find a partner, teammate, accompanist or
                  collaborator.
                </Card.Text>
                <Button className="btn-custom">Connect</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 card-custom">
              <Card.Body className="place">
                <Card.Title className="d-flex align-items-center">
                  <PlaceIcon style={{ color: "green", marginRight: "10px" }} />
                  Place
                </Card.Title>
                <Card.Text>
                  Find a class, school, playground, auditorium, studio, shop or
                  an event venue. Book a slot at venues that allow booking
                  through hobbycue.
                </Card.Text>
                <Button className="btn-custom">Meet up</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="h-100 card-custom">
              <Card.Body className="product">
                <Card.Title className="d-flex align-items-center">
                  <ShoppingBagIcon
                    style={{ color: "red", marginRight: "10px" }}
                  />
                  Product
                </Card.Title>
                <Card.Text>
                  Find equipment or supplies required for your hobby. Buy, rent
                  or borrow from shops, online stores or from community members.
                </Card.Text>
                <Button className="btn-custom">Get it</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 card-custom">
              <Card.Body className="program">
                <Card.Title className="d-flex align-items-center">
                  <EventIcon style={{ color: "blue", marginRight: "10px" }} />
                  Program
                </Card.Title>
                <Card.Text>
                  Find events, meetups and workshops related to your hobby.
                  Register or buy tickets online.
                </Card.Text>
                <Button className="btn-custom">Attend</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;
