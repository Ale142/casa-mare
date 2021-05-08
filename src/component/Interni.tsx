import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import bagno1 from "../images/casa/interni/bagno1.jpg";
import bagno2 from "../images/casa/interni/bagno2.jpeg";
import bagno3 from "../images/casa/interni/bagno3.jpeg";

import camera from "../images/casa/interni/camera.jpg";
import camera2 from "../images/casa/interni/camera2.jpeg";
import camera3 from "../images/casa/interni/camera3.jpeg";

import sala1 from "../images/casa/interni/sala.jpg";
import sala2 from "../images/casa/interni/sala2.jpg";
import sala3 from "../images/casa/interni/sala3.jpeg";
import sala4 from "../images/casa/interni/sala4.jpeg";

import balcone from "../images/casa/interni/balcone.jpeg";

const fotoInterni = [
  {
    src: bagno1,
    alt: "Foto bagno",
    caption: "Bagno",
  },
  {
    src: bagno2,
    alt: "Foto bagno",
    caption: "Bagno",
  },
  {
    src: bagno3,
    alt: "Foto bagno",
    caption: "Bagno",
  },
  {
    src: camera,
    alt: "Foto camera",
    caption: "Camera da letto",
  },
  {
    src: camera2,
    alt: "Foto camera",
    caption: "Camera da letto",
  },
  {
    src: camera3,
    alt: "Foto camera",
    caption: "Camera da letto",
  },
  {
    src: sala1,
    alt: "Foto sala",
    caption: "Sala da pranzo",
  },
  {
    src: sala2,
    alt: "Foto sala 2",
    caption: "Sala da pranzo",
  },
  {
    src: sala3,
    alt: "Foto sala 3",
    caption: "Sala da pranzo",
  },
  {
    src: sala4,
    alt: "Foto sala",
    caption: "Sala da pranzo",
  },
  {
    src: balcone,
    alt: "Balcone",
    caption: "Balcone",
  },
];

const slideShow = fotoInterni.map((el, key) => {
  return (
    <div key={key}>
      <img className="w-100" src={el.src} alt={el.alt} />
    </div>
  );
});

function Interni(props: any) {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-3">
        <Col className="text-center">
          {" "}
          <h2 className="align-self-center"> Interni</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col></Col>
        <Col>
          <Carousel dynamicHeight={true} showThumbs={true} infiniteLoop={true}>
            {slideShow}
          </Carousel>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Interni;
