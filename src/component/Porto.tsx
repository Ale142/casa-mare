import React from 'react';
import {Row, Col} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import porto1 from '../images/porto/porto.jpg';
import porto2 from '../images/porto/porto2.jpg';

const fotoPorto = [
    {
        src: porto1,
        alt: "Porto"
    },
    {
        src: porto2,
        alt: "Porto"
    }
];

const slideShow = fotoPorto.map((el,key) => {
    return (
        <div key = {key}>
            <img
                className = "w-100"
                src = {el.src}
                alt = {el.alt}

            />
        </div>
    );
})

function Porto(props: any) {
    return (
        <Row className = "mt-3" style = {{borderBottom: "solid thin grey"}}>
            <Col md={props.view === 'left' ? 4 : 8}>

                <h2> Porto Marina degli Aregai </h2>
                <p> Con i suoi
circa 1000 posti barca, il Porto Marina degli Aregai è uno dei più importanti sbocchi sul mare della Riviera di
Ponente.
Presso la Marina si trovano anche diversi edifici tra cui la torre di controllo, le
sidi di varie associazioni, una zona ricreativa e sportiva con piscina, campi da
tennis, bowling e squash, bar, ristoranti, un centro commerciale, parcheggio e
un albergo.</p>
                <a href = "https://www.marinadegliaregai.it/"> Maggiori informazioni </a>
            </Col>
            <Col md={props.view === 'left' ? 8 : 4}> 
                <Carousel dynamicHeight = {false} showThumbs = {true}> 
                        {slideShow}
                </Carousel>   
            </Col>
        </Row>
    );
}

export default Porto;