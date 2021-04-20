import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Paese from './Paese';
import Spiagge from './Spiagge';
import Pista from './Pista';
import Porto from './Porto';
import PostiVicini from './PostiVicini';
function Dintorni(props: any) {
    return(
        <Container fluid>
            <Paese view="left"/>
            <Spiagge view="right"/>
            <Pista view="left"></Pista>
            <Porto view="right"/>
            <PostiVicini view = "left"></PostiVicini>
        </Container>
    );
}

export default Dintorni;