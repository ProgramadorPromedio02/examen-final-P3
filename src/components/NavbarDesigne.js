import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarDesigne() {

  return (
    <>
      <Navbar bg="primary">
        <Container className="text-light">
          <Navbar.Brand className="text-light" href="/">PROGRAMACIÓN III(EXAMEN FINAL)</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-light p-1">
              Login: <Link to="/login">Ingresar</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarDesigne;