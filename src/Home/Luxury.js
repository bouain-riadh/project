import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import mercedes from "./images/mercedes-s.png";
import mercedes from "./images/mercedes-ml.png";
import mercedes from "./images/mercedes-cla.png";

function Lux() {
  return (
    <div>
      <CardGroup>
        <div className="container">
          <div className="car-home">
            <Card>
              <Card.Img variant="top" src={mercedes} />
              <Card.Body>
                <Card.Text>
                  S-Classe <br></br>
                  <b>Mercedes</b>
                </Card.Text>
                <Card.Text>
                  <Card.Title>320DT/jr</Card.Title>
                </Card.Text>
                <Card.Text>
                Automatic Transmission  | 5 Seats | Petrol Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={mercedes} />
              <Card.Body>
                <Card.Text>Mercedes</Card.Text>
                <Card.Title>ML350</Card.Title>
                <Card.Title>300DT/jr</Card.Title>
                <Card.Text>
                Automatic Transmission | 5 Seats | Petrol Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={mercedes} />
              <Card.Body>
                <Card.Text>Mercedes</Card.Text>
                <Card.Title>cla</Card.Title>
                <Card.Title>280DT/jr</Card.Title>
                <Card.Text>
                Automatic Transmission | 5 Seats | Petrol Fuel type | 4 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </CardGroup>
    </div>
  );
}

export default Lux;
