import React from "react";
import {
  Form,
  Col,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import car from "./images/car-icon1.png";
import wallet from "./images/wallet-icon.png"
import clock from "./images/clock-icon.png"
import drive from "./images/drive-icon.png"
import playstore from "./images/app-store.png"
import appstore from "./images/google-play.png"


function Table() {
  return (
    <div className="container" style={{ backgroundColor: "rgb(226,233,239)" }}>
      <Form>
        <div>
          <p>
            <b style={{ color: "cyan" }}>DRIVE</b> YOURSELF THROUGH MOBILE
          </p>

          <Row className="align-items-center">
              <div className="icon-bottom">
            <Col xs="auto" className="my-1">
              <Form.Label
                className="me-sm-2"
                htmlFor="inlineFormCustomSelect"
                visuallyHidden
              ></Form.Label>
            </Col>
            <Col className="car-icon1">
              <img src={car} />
              <p><b>1.</b> Select Car</p>
            </Col>
            <Col className="wallet-icon">
              <img src={wallet} />
              <p><b>2.</b> Make Payment</p>
            </Col>
            <Col className="clock-icon">
              <img src={clock} />
              <p><b>3.</b> Navigate To Drive</p>
            </Col>
            <Col className="drive-icon">
              <img src={drive} />
              <p><b>4.</b>Drive Yourself</p>
            </Col>
            </div>
            <p>Get SMS with link to download MYLES app</p>
            <Col xs="auto" className="my-1">
              <InputGroup className="mb-3">
                  
                <FormControl
                  placeholder="Enter your 8 digit mobile number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />{" "}
                <Button type="submit">Send</Button>
              </InputGroup>
            </Col>
            <Col>
            <p>or Download MYLES app from</p>
            <img src={playstore} />
            <img src={appstore} />
            </Col>
          </Row>
        </div>
      </Form>
      {/* <Form>
        <div style={{ marginLeft: "850px" }}>
          <Row className="align-items-center">
            <Col xs="auto" className="my-1">
              <Form.Label
                className="me-sm-2"
                htmlFor="inlineFormCustomSelect"
                visuallyHidden
              >
                Preference
              </Form.Label>
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col xs="auto" className="my-1">
              <Form.Check
                type="checkbox"
                id="customControlAutosizing"
                label="I want to take my car to Ladakh."
              />
            </Col>
          </Row>
        </div>
      </Form> */}
    </div>
  );
}

export default Table;
