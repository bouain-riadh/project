import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import tata from "./images/tata.png";
import ford from "./images/ford.png";

function CardCar() {
  return (
    <div>
      {/* <div class="owl-item" style="width: 360px;"><div class="mc-car-in item">
				  
                  <span class="car-img"><img src="/myles-campaign/car-images-big/ecosport.png" alt=""></span>
                    <div class="mc-car-name">
                    <div class="myles-6"><p class="carname"><span>Ford </span> ecosport</p></div>
                    <div class="myles-6"><span class="mc-price">₹ 169 / <br><span class="pkgv">hr</span></span></div>
                    <div class="clr"></div>
                  </div>
                   <div class="mc-feature">
                     <ul>
                      <li><img src="/images/home_new_page/icon1.png" alt="">Manual<span>Transmission</span></li>
                      <li><img src="/images/home_new_page/icon2.png" alt="">5<span>Seats</span></li>
                      <li><img src="/images/home_new_page/icon3.png" alt=""> Diesel<span>Fuel type</span></li>
                      <li><img src="/images/home_new_page/icon4.png" alt="">2<span>Luggage</span></li>
                    </ul>
                  </div>
                  
                  
               
</div></div> */}

      <CardGroup>
        <div className="container">
          <div className="car-home">
          <Card>
            <Card.Img variant="top" src={tata} />
            <Card.Body>
              <Card.Text>
                Tata <br></br>
                <b>Nexon</b>
              </Card.Text>
              <Card.Text>
                <Card.Title>119DT/jr</Card.Title>
              </Card.Text>
              <Card.Text>
                Manual Transmission | 5 Seats | Diesel Fuel type | 2 Luggage
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={ford} />
            <Card.Body>
              <Card.Text>Ford</Card.Text>
              <Card.Title>ECOSPORT</Card.Title>
              <Card.Title>129DT/jr</Card.Title>
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

export default CardCar;
