import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function NavbarDesigne() {
  return (
    <>
      <Navbar bg="primary">
        <Container className="text-light">
          <Navbar.Brand className="text-light" href="#home">Presentación</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-light">
              Login: <a href="#login" className="text-light">Gonzalo</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarDesigne;