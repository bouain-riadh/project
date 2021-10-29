import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import renault from "./images/renault-duster.png";
import nissan from "./images/nissan-qashqai.png";
import hyundai from "./images/hyundai-tucson.png";

function Muv() {
  return (
    <div>
      <CardGroup>
        <div className="container">
          <div className="car-home">
            <Card>
              <Card.Img variant="top" src={renault} />
              <Card.Body>
                <Card.Text>
                  Renault <br></br>
                  <b>Duster</b>
                </Card.Text>
                <Card.Text>
                  <Card.Title>140DT/jr</Card.Title>
                </Card.Text>
                <Card.Text>
                Manual Transmission  | 5 Seats | Diesel Fuel type | 4 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={nissan} />
              <Card.Body>
                <Card.Text>Nissan</Card.Text>
                <Card.Title>Qashqai</Card.Title>
                <Card.Title>160DT/jr</Card.Title>
                <Card.Text>
                Automatic Transmission | 5 Seats | Diesel Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={hyundai} />
              <Card.Body>
                <Card.Text>Hyundai</Card.Text>
                <Card.Title>Tucson</Card.Title>
                <Card.Title>190DT/jr</Card.Title>
                <Card.Text>
                Automatic Transmission | 5 Seats | Diesel Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </CardGroup>
    </div>
  );
}

export default Muv;
