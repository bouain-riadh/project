import React from 'react'
import {Nav} from 'react-bootstrap'

function Navs() {
    return (
        <div>
 <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="CompactSuv.js">Compact-SUV</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="Hatchback.js">Hatchback</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="Luxury.js">Luxury</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="Muv.js">MUV</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="Sedan.js">Sedan</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="Suv.js">SUV</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
      <b>2 Compact-SUV</b><p className="text-center mt-4 mb-4">models available.</p>
      </Nav.Link>
    </Nav.Item>
  </Nav>
  
        </div>
    )
}

export default Navs
