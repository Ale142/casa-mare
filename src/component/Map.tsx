import React, { useEffect, useRef } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup, Marker } from 'react-mapbox-gl';
import {Container, Row, Col} from 'react-bootstrap';
import {House} from 'react-bootstrap-icons';
import 'mapbox-gl/dist/mapbox-gl.css';



const Map = ReactMapboxGl({
    accessToken:
        process.env.REACT_APP_AUTH_TOKEN + ""
  });

  

const mapContainer =  {
    top: 0,
    right:0,
    left: 0,
    bottom:0
    
};

export default function MapContainer () {
    // const mapContainerRef = useRef< string | HTMLElement>("map-container") as React.MutableRefObject<HTMLElement>;
    // useEffect(() => {
    //     const map = new mapboxgl.Map({
    //         container: mapContainerRef.current,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [7.897701315542028,43.83723341357768],
    //         zoom: 10
    //     });

    //     map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    //     var casa = new mapboxgl.Marker()
    //     .setLngLat([7.9070990662993985,43.83868532005735])
    //     .setPopup(new mapboxgl.Popup().setHTML("<p> Appartamento <p>"))
    //     .setDraggable(false)
    //     .addTo(map);

    //     return () => map.remove();
    // }, []);


   
  
    return (
      <Container>
      <Row className = "justify-content-center mt-3">
          <Col></Col>
          <Col>
          <Map
          style="mapbox://styles/mapbox/outdoors-v11"
          center={[7.897701315542028, 43.83723341357768]}
          containerStyle={{
            margin: "5%",
            height: '600px',
            width: '800px',
            borderRadius: "10%"
          }}
        >
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[7.897701315542028, 43.83723341357768]} />
          </Layer>

          {/* <Popup
          coordinates={[7.9070990662993985, 43.83868532005735]}
          offset={10}
          style = {{"backgroundColor": "green"}}
          >
          <p style = {{"backgroundColor": "green"}}>Casa <House/></p>
          </Popup> */}
          <Marker
            coordinates={[7.9070990662993985, 43.83868532005735]}
            anchor="bottom">
            <p style={{"backgroundColor": "white", "border": "solid thin red", "padding": "0.5em"}}> <strong>Casa </strong> <House/> </p>
          </Marker>
        </Map>
        </Col>
        <Col></Col>
        </Row>
        </Container>
    );
  
}



