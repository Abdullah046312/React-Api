import React, { useState } from 'react'
import "./aboutfirst.css"
import { Col, Container, Row } from 'react-bootstrap'
import images53 from "../assets/images53.jpg"




const Aboutfirst = () => {
   let [count, setCount] = useState (false);
   let [count2, setCount2] = useState (false);
   let [count3, setCount3] = useState (false);
   let [count4, setCount4] = useState (false);
   

   let handleShow = () => {
    setCount(!count);
   };
   let handleShow2 = () => {
    setCount2(!count2);
   };
   let handleShow3 = () => {
    setCount3(!count3);
   };
   let handleShow4 = () => {
    setCount4(!count4);
   };


  return (
   
   <section id='accordion'>
    <Container>
        <Row>
            <Col lg={5}>
            <div className="tharty_one">
                <h2>Startup digital platform for investing</h2>
               <button onClick={handleShow}>Securing Digital Payment</button>
               {count == true ?  <span><i class="fa-solid fa-circle-xmark"></i></span> :  <span><i class="fa-solid fa-square-check"></i></span>}
               
             
               {count && (
                 <p>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
               )}
              
               
            </div>
            <div className="tharty_one">
               <button onClick={handleShow2}>Building the  idea of future</button>
               {count2 == true ?  <span><i class="fa-solid fa-circle-xmark"></i></span> :  <span><i class="fa-solid fa-square-check"></i></span>}
               
             
               {count2 && (
                 <p>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
               )}
              
               
            </div>

            <div className="tharty_one">
               <button onClick={handleShow3}>Accurate and friendly support</button>
               {count3 == true ?  <span><i class="fa-solid fa-circle-xmark"></i></span> :  <span><i class="fa-solid fa-square-check"></i></span>}
               
             
               {count3 && (
                 <p>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
               )}
              
               
            </div>

            <div className="tharty_one">
               <button onClick={handleShow4}>Investing in Digital Company</button>
               {count4 == true ?  <span><i class="fa-solid fa-circle-xmark"></i></span> :  <span><i class="fa-solid fa-square-check"></i></span>}
               
             
               {count4 && (
                 <p>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
               )}
              
               
            </div>
            </Col>

            <Col lg={{span:5, offset:2}}>
            <div className="tharty_two">
              <img src={images53} alt="" />

            </div>
            </Col>
        </Row>
        
    </Container>
   </section>
  )
}

export default Aboutfirst
