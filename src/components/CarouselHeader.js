import { Carousel } from "react-bootstrap";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

function CarouselHeader() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1}/>
        <Carousel.Caption>
          <h3>Aprende React</h3>
          <p>Una de las librerias más importantes de JavaScript.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2}/>
        <Carousel.Caption>
          <h3>Aprende Python</h3>
          <p>Uno de los lenguajes más usados para la ciencia de datos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3}/>
        <Carousel.Caption>
          <h3>Aprende Java</h3>
          <p>Uno de los lenguajes más usados en programación de vídeojuegos.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHeader;