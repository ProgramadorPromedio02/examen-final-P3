import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import logo from "../img/Logotipo(Gomu)Transparente.png";
import styles from "../styles/LoginDesigne.module.css";
import { useState } from "react";

function ScreenRegister() {
  return (
    <div>
      <Container>
        <Row className="d-flex flex-column">
          <Col className="text-center">
            <h1>Register</h1>
            <Image src={logo} className={styles["dimensiones-logo"]}/>
          </Col>
          <br/>
          <Col>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username"/>
            </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ScreenRegister;
