
import React from 'react';
import {Row, Col} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function PostiVicini(props: any) {
    return (
        <Row className = "mt-3" style = {{borderBottom: "solid thin grey"}}>
        <Col md={props.view === 'left' ? 4 : 8}>

            <h2> Da visitare . . . </h2>
            <p><a href = "http://www.comunedipompeiana.net/">Comune di Pompeiana</a> </p>
            <p><a href = "http://www.comunedirivaligure.it/">Comune di Riva Ligure </a></p>
            <p><a href = "https://www.trioradascoprire.it/"> Triora, il Paese delle Streghe</a></p>
            <p><a href = "http://www.comunedicastellaro.it/"> Comune di Castellaro </a></p> 
            <p><a href = "http://www.comune.cipressa.im.it/"> Comune di Cipressa</a></p>
            <p><a href = "http://www.comunepietrabruna.it/"> Comune di Pietrabruna</a></p>
            <p><a href = "http://www.comune.costarainera.im.it/"> Comune di Costarainera</a></p>
            <p><a href = "https://comune.taggia.im.it/"> Comune di Taggia</a></p>
            <p><a href = "http://www.comune.civezza.im.it/"> Comune di Civezza</a></p>
            <p><a href = "https://www.apricale.org/"> Apricale</a></p>
            <p><a href = "https://www.bussanavecchia.it/"> Bussana Vecchia</a></p>
            <p><a href = "http://www.dolceacqua.it/"> Dolceacqua</a></p>
            
        </Col>
        <Col md={props.view === 'left' ? 8 : 4}> 
            
        </Col>
        </Row>
    );
}

export default PostiVicini;