import React from "react";
import { Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import paese1 from "../images/paese/paese1.jpg";
import paese2 from "../images/paese/paese2.jpg";
import paese3 from "../images/paese/paese3.jpg";
import paese4 from "../images/paese/paese4.jpg";
import paese5 from "../images/paese/paese5.jpg";
import paese6 from "../images/paese/paese6.jpeg";
import paese7 from "../images/paese/paese7.jpeg";
import paese8 from "../images/paese/paese8.jpeg";

const fotoPaese = [
  {
    src: paese1,
    alt: "Paese",
  },
  {
    src: paese2,
    alt: "Paese",
  },
  {
    src: paese3,
    alt: "Paese",
  },
  {
    src: paese4,
    alt: "Paese",
  },
  {
    src: paese5,
    alt: "Paese",
  },
  {
    src: paese6,
    alt: "Paese",
  },
  {
    src: paese7,
    alt: "Paese",
  },
  {
    src: paese8,
    alt: "Paese",
  },
];

const slideShow = fotoPaese.map((el, key) => {
  return (
    <div key={key}>
      <img className="w-100" src={el.src} alt={el.alt} />
    </div>
  );
});

function Paese(props: any) {
  return (
    <Row className="mt-3" style={{ borderBottom: "solid thin grey" }}>
      <Col md={props.view === "left" ? 4 : 8}>
        <Carousel dynamicHeight={false} showThumbs={true}>
          {slideShow}
        </Carousel>
      </Col>

      <Col md={props.view === "left" ? 8 : 4}>
        <h2> Santo Stefano al Mare</h2>
        <p>
          {" "}
          Santo Stefano conserva al suo interno diversi punti di interesse, uno
          su tutti sicuramente è la sua torre ennagonale, ossia con nove lati,
          unica in Italia realizzata nel 1556 a protezione del comune dalle
          incursioni saracene. Santo Stefano è una meta turistica molto ambita,
          ma allo stesso tempo durante i mesi estivi non è affollatissima e
          concede così il giusto riposo ai turisti senza farsi mancare tutte le
          comodità e le attrazioni tipiche di una grande città. La parte antica
          del borgo poi racchiude altre sorprese: vicoli tortuosi in perfetto
          stile ligure si srotolano all’interno di Santo Stefano portando i
          visitatori alla scoperta di cappelle votive, chiese e resti antichi
          del passato del borgo. Fra tutte merita una visita la chiesa
          parrocchiale di Santo Stefano Protomartire con le sue tre navate, le
          cappelle laterali e diverse testimonianze artistiche del 1400.
        </p>
        <a href="http://www.comune.santostefanoalmare.im.it/">
          {" "}
          Maggiori informazioni{" "}
        </a>
      </Col>
    </Row>
  );
}

export default Paese;
