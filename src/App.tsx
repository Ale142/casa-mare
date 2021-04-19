import React from 'react';
import 'antd/dist/antd.css';
import {Container, Navbar, Nav} from "react-bootstrap";
import {
  BrowserRouter as Router,
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
    <Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill variant="tabs">
          <Nav.Item> <Nav.Link><Link to = "/"> Home </Link></Nav.Link></Nav.Item>

          <Nav.Item> <Nav.Link><Link to = "/interni"> Interni </Link></Nav.Link></Nav.Item>
         
          <Nav.Item><Nav.Link><Link to = "/esterni"> Esterni </Link></Nav.Link></Nav.Item>
         
          <Nav.Item> <Nav.Link><Link to = "/nei-dintorni"> Nei dintorni </Link></Nav.Link></Nav.Item>
         
          <Nav.Item> <Nav.Link><Link to = "/mappa"> Mappa </Link></Nav.Link></Nav.Item>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Switch>
      <Route path = "/home"> Home </Route>
      <Route path = "/interni"> <Interni/> </Route>
      <Route path = "/esterni"> <Esterni/> </Route>
      <Route path = "/nei-dintorni"> <Dintorni/></Route>
      <Route path = "/mappa"> <Map/>  </Route>
      <Route path = "/"> <Home/> </Route>
   
    </Switch>
   
    </Router>
  </Container>
  );
}

export default App;
