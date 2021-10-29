import React from 'react'
import {Form, Col, Row, Button} from 'react-bootstrap';
import Agenda from './Agenda';

function Table() {
    return (
        <div className="table-home">
           <Form>
             <div style={{marginLeft:"850px"}}>
             <p>Rent Your Self Drive Car</p>
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
        <option value="0">Where do you want your car?</option>
        <option value="1">Sousse</option>
        <option value="2">Bizerte</option>
        <option value="3">Beja</option>
        <option value="1">Gafsa</option>
        <option value="2">Le kef</option>
        <option value="3">La Manouba</option>
        <option value="1">Médnine</option>
        <option value="2">Nabeul</option>
        <option value="3">Jendouba</option>
        <option value="1">Kairouan</option>
        <option value="2">Mahdia</option>
        <option value="3">Monastir</option>
        <option value="1">Sfax</option>
        <option value="2">Tataouine</option>
        <option value="3">Zaghouan</option>
        <option value="1">Ariana</option>
        <option value="2">Ben Arous</option>
        <option value="3">Gabes</option>
        <option value="1">Kebili</option>
        <option value="2">Tozeur</option>
        <option value="3">Tunis</option>
        <option value="1">Sidi Bouzid</option>
      </Form.Select>
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit">Book Now</Button>
    </Col>
  </Row>
  </div>
</Form>
<Form>
  <div style={{marginLeft:"850px"}}>
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
    <Col className="agenda">
    <Agenda/>
    </Col>
  </Row>
 </div>
</Form>
        </div>
    )
}

export default Table
