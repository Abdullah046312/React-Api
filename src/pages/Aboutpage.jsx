import React from 'react'
import "./about.css"
import { Row, Col } from 'react-bootstrap'







const Aboutpage = () => {
 
  return (
    
    
    <section id='one'>
    <div className="container">
      <Row>
        <Col lg={{span:8, offset:2}}>
        <div className="one_main">
         <h2> You're Unique. Your Website Should Be Too... </h2>
         <p>A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business.</p>
         <button>Get free quoto</button>
         <div className="two_main">
          <button>Learn More</button>
         </div>
          

        </div>
        </Col>
      </Row>
    </div>
  </section>
  
  )
}


export default Aboutpage
