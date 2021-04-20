import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import cortile1 from '../images/casa/esterni/cortile1.jpg';
import esterno1 from '../images/casa/esterni/esterno1.jpeg';
import esterno2 from '../images/casa/esterni/esterno2.jpg';
import esterno3 from '../images/casa/esterni/esterno3.jpeg';
import piantina from '../images/casa/esterni/piantina.png';
import postoauto from '../images/casa/esterni/postoauto.jpg';
import vista1 from '../images/casa/esterni/vista1.jpg';
import vista2 from '../images/casa/esterni/vista2.jpg';
import vista3 from '../images/casa/esterni/vista3.jpg';
import vista4 from '../images/casa/esterni/vista4.jpeg';
const fotoEsterni = [
    {
        src: cortile1,
        alt: "Foto cortile",
        caption: "Cortile"
    },
    {
        src: esterno1,
        alt: "Foto esterno",
        caption: "Esterno"
    },
    {
        src: esterno2,
        alt: "Foto esterno",
        caption: "Esterno"
    },
    {
        src: esterno3,
        alt: "Foto esterno",
        caption: "Esterno"
    },
    
    {
        src: piantina,
        alt: "Foto piantina",
        caption: "Piantina"
    },
    {
        src: postoauto,
        alt: "Foto posto auto",
        caption: "Posto auto"
    },
    {
        src: vista1,
        alt: "Foto vista mare",
        caption: "Vista mare"
    },
    // {
    //     src: vista2,
    //     alt: "Foto vista mare",
    //     caption: "Vista mare"
    // },
    // {
    //     src: vista4,
    //     alt: "Foto vista mare",
    //     caption: "Vista mare"
    // },
    {
        src: vista3,
        alt: "Foto vista mare",
        caption: "Vista mare"
    }
];

const slideShow = fotoEsterni.map((el, key) => {
    return (
        <div key = {key}>
        <img
            className = "w-100"
            src = {el.src}
            alt = {el.alt}

        />
        <p>
            <h2 style = {{color: "white"}}> {el.caption}</h2>
        </p>
        </div>
    );
})

function Esterni (props: any) {
    return (
        <Container fluid>
            <Row className = "justify-content-center mt-3">
                <Col className = "text-center"> <h2 className = "align-self-center"> Esterni</h2></Col>
            </Row>
            <Row className = "justify-content-center mt-5">
                <Col></Col>
                <Col> 
                <Carousel dynamicHeight = {false} showThumbs = {true} infiniteLoop = {true}>
                    {slideShow}
                </Carousel>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        
    );
}

export default Esterni;