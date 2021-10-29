import React from "react";
import {
  Form,
  Col,
  Row,
  InputGroup,
  FormControl,
  Table
} from "react-bootstrap";
import car from "./images/car-icon.png";
import location from "./images/location-icon.png"
import unlimited from "./images/unlimited-icon.png"
import Slide from './Slide';


function TableTop() {
  return (
    <div  style={{ backgroundColor: "rgb(244,246,252)" }}>
      <Form>
        <div className="container">
          <Row className="align-items-center">
              <div className="icon-bottom">
            <Col xs="auto" className="my-1">
              <Form.Label
                className="me-sm-2"
                htmlFor="inlineFormCustomSelect"
                visuallyHidden
              ></Form.Label>
            </Col>
            <Col className="car-icon">
              <img src={car} />
              <p><b>38</b>Higher Variant Models</p>
            </Col>
            <Col className="location-icon">
              <img src={location} />
              <p><b>250+</b>Locations In 21 Cities</p>
            </Col>
            <Col className="unlimited-icon">
              <img src={unlimited} />
              <p><b>Unlimited</b> Kilometers To Drive</p>
            </Col>
            </div>
            <Col xs="auto" className="my-1">
            </Col>
            <Table striped bordered hover style={{ borderColor: "rgb(224,70,39)" }}>
  <thead>
    <tr>
      <th>FLAT RS.550 OFF ON SPENDS OF RS.2500 (FIRST RIDE)</th>
    </tr>
    <tr>
      <th>
    USE CODE: <b>MYLES550FTU</b>
    </th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
    </tr>
  </tbody>
</Table>
          </Row>
          <Slide/>
        </div>
      </Form>
    </div>
  );
}

export default TableTop;
 