import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./servicepage.css"

const Servicepage = () => {
  return (
    <section id='two'>
    <div className="container">
      <Row>
        <Col lg={{span:8, offset:2}}>
        <div className="two_main">
         <h2> WELCOME! </h2>
         <h3>The Best Hair Saloon.</h3>
         <p>We use quality products and the latest styling techniques to bring out your very best. We promises to provide you with 5-star service.</p>
         <button>Get free quoto</button>
         <div className="three_main">
          <button>Learn More</button>
         </div>
          

        </div>
        </Col>
      </Row>
    </div>
  </section>
  )
}

export default Servicepage
