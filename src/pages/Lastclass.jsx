import React, { useEffect, useState } from 'react'
import "./lastclass.css"
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';


const Lastclass = () => {
    let [product, setProduct] = useState([]);

    let getData = () =>{
      axios.get("https://dummyjson.com/products").then((respone)=>{
        setProduct(respone.data.products);
        

      });

    };
  
    
    useEffect (()=>{
      getData()


},[])
  return (
    <section id='last'>
        <Container>
            <Row>
           
                {product.map((item)=>(
                <Col lg={4}>

              <div className="api_main">
                <span>{item.id}</span>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <h4>{item.category}</h4>
                <h5>{item.price}</h5>
                <h6>{item.discountPercentage}</h6>
                <p>{item.tags}</p>
                
                <img src={item.thumbnail} alt="" />
                </div>

                
                </Col>
               
                ))}
              
               
             
            </Row>
        </Container>
    </section>
  )
}

export default Lastclass
