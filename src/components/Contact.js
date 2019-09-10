import React from "react";
import { Col, Form, FormGroup, Label, Button, Input } from "reactstrap";

const Contact = props => {
  return (
    <div className="container contact-container  pt-5 pb-5">
      <h2 className=" text-center mb-5">Contact Us</h2>
      <Form>
        <FormGroup row>
          <Label for="firstname" sm={2}>
            First Name
          </Label>
          <Col sm={8}>
            <Input type="text" name="firstname" id="firstname" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="lastname" sm={2}>
            Last Name
          </Label>
          <Col sm={8}>
            <Input type="text" name="lastname" id="lastname" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={8}>
            <Input type="email" name="email" id="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="message" sm={2}>
            Message
          </Label>
          <Col sm={8}>
            <Input type="textarea" name="message" id="message" rows="5" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Contact;
