import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import audi from "./images/audi-q7.png";
import kia from "./images/kia-sportage.png";
import toyota from "./images/toyota-hilux.png";
import jeep from "./images/jeep.png";
import audi from "./images/audi-q5.png";


function Sedan() {
  return (
    <div>
      <CardGroup>
        <div className="container">
          <div className="car-home">
            <Card>
              <Card.Img variant="top" src={audi} />
              <Card.Body>
                <Card.Text>
                  AUDI <br></br>
                  <b>Q7</b>
                </Card.Text>
                <Card.Text>
                  <Card.Title>320DT/jr</Card.Title>
                </Card.Text>
                <Card.Text>
                Manual Transmission  | 5 Seats | Diesel Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={audi} />
              <Card.Body>
                <Card.Text>AUDI</Card.Text>
                <Card.Title>Q5</Card.Title>
                <Card.Title>290DT/jr</Card.Title>
                <Card.Text>
                Manual Transmission | 5 Seats | Petrol Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={toyota} />
              <Card.Body>
                <Card.Text>Toyota</Card.Text>
                <Card.Title>Hilux</Card.Title>
                <Card.Title>300DT/jr</Card.Title>
                <Card.Text>
                Automatic Transmission | 5 Seats | Diesel Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={kia} />
              <Card.Body>
                <Card.Text>KIA</Card.Text>
                <Card.Title>Sportage</Card.Title>
                <Card.Title>290DT/jr</Card.Title>
                <Card.Text>
                Automatic Transmission | 5 Seats | Diesel Fuel type | 5 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={jeep} />
              <Card.Body>
                <Card.Text>JEEP</Card.Text>
                <Card.Title>Grand Cherokee</Card.Title>
                <Card.Title>180DT/jr</Card.Title>
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

export default Sedan;
