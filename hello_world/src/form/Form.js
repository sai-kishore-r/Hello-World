import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Formpage() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Fill Your Details</h4>
      <Form>
        <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your your email address"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <div style={{ paddingTop: "2%" }}>
          <Button variant="primary" type="submit">
            Click here to submit form
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default Formpage;
