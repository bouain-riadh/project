import React from 'react'
import {Card} from 'react-bootstrap'
import vito from './images/MERCEDES-BENZ_Vito.jpg'
import affiche from './images/chauffeur.jpg'
import free from './images/free.png'

function CardCar() {
    return (
        <div className="box" style={{ marginTop:"80px"}}>
            <Card style={{ width: '22rem'}}>
  <Card.Body>
  <img
      className="d-block w-100"
      src={affiche}
    />
    <Card.Title>SUIVI EN TEMPS RÉEL</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
  </Card.Body>
</Card>
            <Card style={{ width: '22rem'}}>
  <Card.Body>
  <img
      className="d-block w-100"
      src={vito}
    />
    <Card.Title>Mercedes-Benz V-Class</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
  </Card.Body>
</Card>
<Card style={{ width: '22rem'}}>
  <Card.Body>
  <img
      className="d-block w-100"
      src={free}
    />
    <Card.Title>GRATUIT</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
  </Card.Body>
</Card>
        </div>
    )
}

export default CardCar
