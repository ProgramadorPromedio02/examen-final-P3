import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarDesigne() {
  return (
    <Navbar bg="primary">
      <Container className="text-light">
        <Navbar.Brand classname="text-light" href="#home">Presentación</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Login: <a href="#login">Gonzalo</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDesigne;