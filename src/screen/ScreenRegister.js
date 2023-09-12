import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import logo from "../img/logosmall.png";
import styles from "../styles/LoginDesigne.module.css";
import CardForm from "../components/CardForm";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ScreenRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [RegisterSuccess, setRegisterSuccess] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/users",
        {
          email: email,
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const newUser = {
          nameUser: username,
          correo: email,
        };
        const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        existingUsers.push(newUser);
        localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

        setRegisterSuccess(true);
        setShowModal(true);
      } else {
        setRegisterSuccess(false);
        setShowModal(true);
      }
    } catch (error) {
      console.log("error", error);
      alert("Hubo un error en el registro.");
    }
  };

  const modalTitle = RegisterSuccess ? "Registro Exitoso" : "Registro Incorrecto";
  const modalMessage = RegisterSuccess ? "Nuevo usuario registrado con exito. ¿Quieres ir a iniciar sesión?" : "Fallo el registro del usuario. Por favor, inténtelo nuevamente.";

  return (
    <div className="d-flex justify-content-center">
      <CardForm
        content={
          <Container>
            <Row className="d-flex flex-column">
              <Col sm={4}>
                <Link to="/" ><button className="btn btn-primary m-1">Volver Inicio</button></Link>
              </Col>
              <Col sm={12} className="text-center">
                <h3>Register</h3>
                <img alt="logo" src={logo} className={`mb-2 ${styles['dimensiones-logo']}`} />
              </Col>
              <br />
              <Col sm={12} className="d-flex justify-content-center">
                <form onSubmit={handleRegister}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="check"
                    />
                  </div>
                </form>
              </Col>
              <Col className="d-flex mt-4 p-2 justify-content-center">
                <Link to="/login" className=" m-2 ">
                  Iniciar Sesión
                </Link>
                <button type="submit" className="btn btn-primary m-2" onClick={handleRegister}>Registrarse</button>
              </Col>
            </Row>
            {showModal && (
              <div
                className="modal show"

                style={{
                  display: 'block',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 1050,
                }}
              >
                <Modal.Dialog>
                  <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>{modalMessage}</p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    {RegisterSuccess ? (
                      <Button variant="primary" onClick={() => navigate('/login')}>Login</Button>
                    ) : (
                      <Button variant="primary" onClick={() => setShowModal(false)}>OK</Button>
                    )}
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            )}
          </Container>
        }
      />
    </div>
  );
}

export default ScreenRegister;
