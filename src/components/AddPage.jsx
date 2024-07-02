import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../css/AddPage.css";

function AddPage() {
  return (
    <Container className="add-page-container my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column align-items-start">
              <Card.Title className="d-flex align-items-center">
                <AddCircleIcon className="add-circle-icon" />
                Add your own
              </Card.Title>
              <Card.Text className="mt-2">
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page.
              </Card.Text>
              <Button className="btn-custom">Add new</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddPage;
