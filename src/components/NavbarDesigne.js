import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import WeatherComponent from './WeatherComponent';
import { useState } from 'react';

function NavbarDesigne() {
  const [showWeather, setShowWeather] = useState(false);
  const handleHideWeather = () => {
    setShowWeather(false)
  }
  const handleShowWeather = () => {
    setShowWeather(true)
  }
  return (
    <>
      <Navbar bg="primary">
        <Container className="text-light">
          <Navbar.Brand className="text-light" href="#home">Presentación</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form className='d- flex'>
              {
                showWeather ? (<Button variant="dark" onClick={handleHideWeather}>ocultar clima</Button>) : (<Button variant="dark" onClick={handleShowWeather}>mostrar clima</Button>)
              }
            </Form>
            <Navbar.Text className="text-light">
              Login: <a href="#login" className="text-light">Gonzalo</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showWeather&& <WeatherComponent/>}
    </>
  );
}

export default NavbarDesigne;