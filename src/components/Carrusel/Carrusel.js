import Carousel from "react-bootstrap/Carousel";
import slideOne from "../../images/slide1.jpg";
import slideTwo from "../../images/slide2.jpeg";
import slideThree from "../../images/slide3.jpg";
import "./Carrusel.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Carrusel = () => {
  return (
    <>
      <Carousel className="carrousel-container">
        <Carousel.Item>
          <img className="d-block w-100" src={slideOne} alt="First slide" />
          <Carousel.Caption>
            <h3>Conocé nuestra variedad de productos</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideTwo} alt="Second slide" />

          <Carousel.Caption>
            <h3>
              Distribuidora de productos saludables pero sobre todo ricos!
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideThree} alt="Third slide" />

          <Carousel.Caption>
            <h3>
              Encontrá productos vegetarianos, aptos para veganos y celíacos
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carrusel;
