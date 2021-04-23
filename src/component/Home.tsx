import React from 'react';
import {Container, Row, Col, ListGroup, Image} from 'react-bootstrap';
import { Whatsapp, EnvelopeFill } from 'react-bootstrap-icons';
import copertina from '../images/copertina.jpeg';
function Home(props: any) {
    return (
        <Container fluid>
            <Row className = "justify-content-center mt-3">
                <Col>
                    <Image src={copertina} fluid />
                </Col>
            </Row>
            <Row className = "justify-content-center mt-3">
                <Col className = "text-center"> <h2 className = "align-self-center"> Alloggio Santo Stefano al Mare </h2></Col>
            </Row>
            <Row className = "justify-content-center mt-5">

                <Col xs = "10">
                    <p> Bilocale piano terra di 33 mq, ideale per 4 persone, con affaccio su giardino e lato vista mare composto da: 
                        <ListGroup>
                            <ListGroup.Item>Angolo cottura </ListGroup.Item>
                            <ListGroup.Item>Tinello con divano letto</ListGroup.Item>
                            <ListGroup.Item>1 camera da letto con Tv</ListGroup.Item>
                            <ListGroup.Item> Bagno con doccia (no lavatrice) </ListGroup.Item>
                            <ListGroup.Item> Terrazza/balcone con tavolo e sedie</ListGroup.Item>
                            <ListGroup.Item> Cantina</ListGroup.Item>
                            <ListGroup.Item> Posto auto scoperto con due posti</ListGroup.Item>
                            <ListGroup.Item> Locale condominale per custodia bici</ListGroup.Item>
                        </ListGroup>
                    
                        L’alloggio si trova in un condominio con giardino e grande terrazza con vista mare a 180° sul porto turistico 
                        Marina degli Aregai e pista ciclabile. 
                        Vicino si troverà anche la fermata bus Riviera Andora-Sanremo all’ingresso del complesso.
                    
                    </p>
                    <p>
                        Contatti:
                        <ListGroup>
                            <ListGroup.Item> <Whatsapp/> 3926742367 (solo messaggi/vocali)</ListGroup.Item>
                            <ListGroup.Item> <EnvelopeFill/> <a href = "mailto: amicimare123@gmail.com">amicimare123@gmail.com</a></ListGroup.Item>

                        </ListGroup>    
                    </p>                

                    <h4> Disponibilità </h4> <br/>
                    <iframe style = {{width:"100vh", height:"50vh"}} id = "calendarioDisponibilita" src = "https://calendar.google.com/calendar/embed?src=amicimare123@gmail.com"></iframe>
                </Col>
               
            </Row>
        </Container>
    );
}

export default Home;