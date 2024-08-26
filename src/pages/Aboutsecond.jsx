import React from 'react'
import "./aboutsecond.css"
import { Col, Container, Row } from 'react-bootstrap'
import images45 from "../assets/images45.jpg"
import images46 from "../assets/images46.jpg"
import images47 from "../assets/images47.jpg"
import images48 from "../assets/images48.jpg"
import images49 from "../assets/images49.jpg"
import images50 from "../assets/images50.jpg"
import images51 from "../assets/images51.jpg"
import images52 from "../assets/images52.jpg"

const Aboutsecond = () => {
  return (
    <section id='aboutsecond'>
        <Container>
            <Row>
                <Col lg={12}>
                <div className="tharty_three">
                    <img src={images45} alt="" />
                    <img src={images46} alt="" />
                    <img src={images47} alt="" />
                    <img src={images48} alt="" />
                    <img src={images49} alt="" />
                    <img src={images50} alt="" />
                    <img src={images51} alt="" />
                    <img src={images52} alt="" />

                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                <div className="tharty_four">
                   <a href="https://southfreak.wiki/category/bangla-subtitle/"><button>BanglaSubtitle</button></a>
                  <a href="https://southfreak.wiki/category/bengali/"><button>Bangali</button></a>
                   <a href="https://southfreak.wiki/category/bollywood/"><button>BollyWood</button></a>
                   <a href="https://southfreak.wiki/category/dual-audio/"><button>Dual Audio</button></a>
                   <a href="https://southfreak.wiki/category/hollywood/"><button>Hollywood</button></a>
                   <a href="https://southfreak.wiki/category/imdb-250/"><button>IMDB 250</button></a>
                   <a href="https://southfreak.wiki/category/kannda-movie/"><button>Kannada</button></a>
                   <a href="https://southfreak.wiki/category/malayalam-movie/"><button>Malayalam</button></a>
                   <a href="https://southfreak.wiki/category/tamil-movie/"><button>Tamil</button></a>
                   <a href="https://southfreak.wiki/category/telugu-movie/"><button>Telugu</button></a>
                   <a href="https://southfreak.wiki/category/hindi-dubbed/"><button>Hindi Dubbed</button></a>
                   <a href="https://southfreak.wiki/category/tv-movie/"><button>WEB/TV Series</button></a>
                  


                </div>
                </Col>
                
            </Row>
            
        </Container>
    </section>
  )
}

export default Aboutsecond
