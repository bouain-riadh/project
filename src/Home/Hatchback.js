import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import suzuki from "./images/suzuki-swift.png";
import hyundai from "./images/hyundai-i10.png";
import hyundai from "./images/hyundai-i20.png";

function Hatch() {
  return (
    <div>
      <CardGroup>
        <div className="container">
          <div className="car-home">
            <Card>
              <Card.Img variant="top" src={suzuki} />
              <Card.Body>
                <Card.Text>
                  Maruti <br></br>
                  <b>SWIFT</b>
                </Card.Text>
                <Card.Text>
                  <Card.Title>110DT/jr</Card.Title>
                </Card.Text>
                <Card.Text>
                  Manual Transmission | 5 Seats | Diesel Fuel type | 1 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={hyundai} />
              <Card.Body>
                <Card.Text>Hyundai</Card.Text>
                <Card.Title>I10 GRAND</Card.Title>
                <Card.Title>117DT/jr</Card.Title>
                <Card.Text>
                  Manual Transmission | 5 Seats | Diesel Fuel type | 2 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={hyundai} />
              <Card.Body>
                <Card.Text>Hyundai</Card.Text>
                <Card.Title>I20</Card.Title>
                <Card.Title>128DT/jr</Card.Title>
                <Card.Text>
                  Manual Transmission | 5 Seats | Diesel Fuel type | 2 Luggage
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </CardGroup>
    </div>
  );
}

export default Hatch;
