import React from 'react';
import {Row, Col} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import spiaggia1 from '../images/spiagge/spiaggia1.jpeg';
import spiaggia2 from '../images/spiagge/spiaggia2.jpg';
import spiaggia3 from '../images/spiagge/spiaggia3.jpg'


const fotoSpiagge = [
    {
        src: spiaggia1,
        alt: "Spiaggia"
    },
    {
        src: spiaggia2,
        alt: "Spiaggia"
    },
    {
        src: spiaggia3,
        alt: "Spiaggia"
    }
];

const slideShow = fotoSpiagge.map((el, key) => {
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
function Spiagge(props: any) {
    return (
        <Row className = "mt-3" style = {{borderBottom: "solid thin grey"}}>
        <Col md={props.view === 'left' ? 4 : 8}>

            <h2> Spiagge </h2>
            <p> </p>
            <a href = "https://www.facebook.com/baiaazzurras.stefano"> Baia Azzurra beach</a>
            <a href = "https://www.trovaspiagge.it/spiaggia-il-vascello/"> Bagni il Vascello </a>
        </Col>
        <Col md={props.view === 'left' ? 8 : 4}> 
            <Carousel dynamicHeight = {false} showThumbs = {true}> 
                    {slideShow}
            </Carousel>   
        </Col>
        </Row>
    );
}

export default Spiagge;