import React from 'react';
import {Row, Col} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pista1 from '../images/pista/pista1.jpg';
import pista2 from '../images/pista/pista2.jpg';
import pista3 from '../images/pista/pista3.jpg';
import pista4 from '../images/pista/pista4.jpg';

const fotoPista = [
    {
        src: pista1,
        alt: "Pista"
    },
    {
        src: pista2,
        alt: "Pista"
    },
    {
        src: pista3,
        alt: "Pista"
    },
    {
        src: pista4,
        alt: "Pista"
    }
];

const slideShow = fotoPista.map((el,key) => {
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

function Pista(props: any) {
    return (
        <Row className = "mt-3" style = {{borderBottom: "solid thin grey"}}>
            <Col md={props.view === 'left' ? 4 : 8} >
                <Carousel showThumbs = {true} dynamicHeight = {false} centerSlidePercentage = {30}> 
                        {slideShow}
                </Carousel>   
                
            </Col>
            <Col md={props.view === 'left' ? 8 : 4}> 
                <h2> Pista ciclabile </h2>
                <p> La splendida pista ciclabile, di 24km, che collega San Lorenzo e Ospedaletti, corre
poi sempre vicino al mare, da qui si possono ammirare tutti i lidi del borgo con le
antiche case dei pescatori, colorate e piene di vita a ridosso della spiaggia. Dalla pista ciclabile poi si può ammirare l’emblema del futuro di Santo Stefano che, da
meta prettamente turistica, è oggi anche volta verso un’espansione economica e
commerciale grazie al porto turistico di Marina degli Aregai 
</p>
                <a href = "https://www.pistaciclabile.com/"> Maggiorni informazioni sulla pista ciclabile </a>
            </Col>
        </Row>
    );
}

export default Pista;