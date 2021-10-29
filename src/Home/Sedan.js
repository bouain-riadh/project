import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import renault from "./images/renault-megane.png";
import kia from "./images/kia-cerato.png";
import toyota from "./images/toyota-corolla.png";
import passat from "./images/passat-jetta.png";
import passat from "./images/passat.png";
import peugeot from "./images/peugeot-301.png";

function Sedan() {
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
                  <b>Megane</b>
                </Card.Text>
                <Card.Text>
                  <Card.Title>160DT/jr</Card.Title>
                </Card.Text>
                <Card.Text>
                Manual Transmission  | 5 Seats | Diesel Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={kia} />
              <Card.Body>
                <Card.Text>Kia</Card.Text>
                <Card.Title>Cerato</Card.Title>
                <Card.Title>160DT/jr</Card.Title>
                <Card.Text>
                Manual Transmission | 5 Seats | Petrol Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={toyota} />
              <Card.Body>
                <Card.Text>Toyota</Card.Text>
                <Card.Title>Corolla</Card.Title>
                <Card.Title>150DT/jr</Card.Title>
                <Card.Text>
                Automatic Transmission | 5 Seats | Diesel Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={passat} />
              <Card.Body>
                <Card.Text>volkswagen</Card.Text>
                <Card.Title>Passat</Card.Title>
                <Card.Title>200DT/jr</Card.Title>
                <Card.Text>
                Automatic Transmission | 5 Seats | Diesel Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={passat} />
              <Card.Body>
                <Card.Text>volkswagen</Card.Text>
                <Card.Title>Jetta</Card.Title>
                <Card.Title>180DT/jr</Card.Title>
                <Card.Text>
                Automatic Transmission | 5 Seats | Diesel Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={peugeot} />
              <Card.Body>
                <Card.Text>Peugeot</Card.Text>
                <Card.Title>301</Card.Title>
                <Card.Title>140DT/jr</Card.Title>
                <Card.Text>
                Manual Transmission | 5 Seats | Petrol Fuel type | 4 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </CardGroup>
    </div>
  );
}

export default Sedan;
