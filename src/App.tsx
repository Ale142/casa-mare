import React from 'react';
import 'antd/dist/antd.css';
import {Container, Navbar, Nav} from "react-bootstrap";
import {
 HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Interni from './component/Interni';
import Esterni from './component/Esterni';
import Dintorni from './component/Dintorni';
import Map from './component/Map';
import Home from './component/Home';

function App() {
  return (
    <Container>
    <HashRouter basename = {"https://ale142.github.io/casa-mare/"}>
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill variant="tabs">
          <Nav.Item> <Nav.Link><Link to = "/casa-mare"> Home </Link></Nav.Link></Nav.Item>

          <Nav.Item> <Nav.Link><Link to = "/casa-mare/interni"> Interni </Link></Nav.Link></Nav.Item>
         
          <Nav.Item><Nav.Link><Link to = "/casa-mare/esterni"> Esterni </Link></Nav.Link></Nav.Item>
         
          <Nav.Item> <Nav.Link><Link to = "/casa-mare/nei-dintorni"> Nei dintorni </Link></Nav.Link></Nav.Item>
         
          <Nav.Item> <Nav.Link><Link to = "/casa-mare/mappa"> Mappa </Link></Nav.Link></Nav.Item>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Switch>
      
      <Route path = "/casa-mare/interni"> <Interni/> </Route>
      <Route path = "/casa-mare/esterni"> <Esterni/> </Route>
      <Route path = "/casa-mare/nei-dintorni"> <Dintorni/></Route>
      <Route path = "/casa-mare/mappa"> <Map/>  </Route>
      <Route path = "/casa-mare"> <Home/> </Route>
   
    </Switch>
   
    </HashRouter>
  </Container>
  );
}

export default App;
