import { Col, Container, Row, Image } from "react-bootstrap";
import studying from "../img/studying.png";
import styles from "../styles/Content.module.css";

function Content() {
  return (
    <div className="m-2">
      <Container>
        <Row className="d-flex flex-column m-1 p-1">
          <Col className="text-center">
            <h1>CÓMO ENTENDER LA PROGRAMACIÓN</h1>
          </Col>
          <Col>
            <p>
              Quizás eres un programador novel que está comenzando a desenvolverse en algún lenguaje
              de programación y te está constando arrancar o afianzar todos los conceptos nuevos que
              te vas encontrando. El aprendizaje de un lenguaje de programación es algo que requiere
              un relativo alto número de horas, por lo que cuánto mayor sea la calidad de ese tiempo
              que dediquemos mejor serán los resultados.
            </p>
            <p>
              A continuación, os expongo una serie de tips o consejos (como queráis llamarlos)
              inspirados en experiencias propias y unos cuantos posts leídos sobre el tema que rozan
              la temática de la auto ayuda encapsulada en recetas.
            </p>
          </Col>
          <Col>
            <Image className={styles["studying-img"]} src={studying} />
          </Col>
          <Col>
            <h3>Pasos a seguir:</h3>
            <ul>
              <li>Aprende los fundamentos de programación</li>
              <li>Practica todos los días lo aprendido</li>
              <li>Construye tu primer proyecto de programación</li>
              <li>Elige lo que te interesa.</li>
              <li>Comienza con un código sencillo</li>
              <li>Construye algo útil</li>
              <li>Resuelve errores o bugs en tu código</li>
            </ul>
            <br/>
            <br/>
            <span>Ya que sabes cómo aprender programación desde cero, el siguiente paso será el <a href="#">Full Stack Jr. Bootcamp</a>, en menos de 4 meses serás capaz de desarrollar un pensamiento computacional mientras te inicias en las metodologías y claves para escribir un código útil, rápido y elegante con Python. ¡Anímate y empieza a programar!</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;