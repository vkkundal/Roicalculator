import React from 'react';
import { Image, Navbar, Nav, Container,Row,Col } from 'react-bootstrap';
import Tvelia from './images/Tvelia.png';
import youngWoman from './images/youngWoman.png';
import Rectangle from './images/Rectangle.png';
import Rectangle97 from './images/Rectangle97.png';
import Rectangle98 from './images/Rectangle98.png';
import manhike from './images/manhike.png';
import rockmountains from './images/rockmountains.png';
import hikerstop from './images/hikerstop.png';
import './Adv.css';
const Adv = () => {
    return (
        <>
            <Navbar expand="lg" className='py-0'>
                <Container className='my-0'>
                    <Navbar.Brand href="#home"><Image src={Tvelia} thumbnail /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Adventures</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#link">Signup</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='my-0'>
                <div className='banner'>
                    <div className='banner-img'> <Image src={youngWoman} thumbnail /> </div>
                    <div className='banner-title'> Its Time For New Adventures,Escapes thrills & experiences</div>
                </div>

            </Container>
            <Container>
                <div className='text-center sectionTitle'> Best Places on Earth </div>
                <Row>
                    <Col xs={6} md={6}>
                        <Image className="w-100" src={Rectangle}  />
                    </Col>
                    <Col xs={6} md={6}>
                        <Row>
                            <Col sm={4} md={4}><Image className="w-100" src={Rectangle97} /><Image className="w-100" src={Rectangle98} /></Col>
                            <Col sm={4} md={4}>2</Col>
                            <Col sm={4} md={4}>3</Col>
                        </Row>
                          </Col>
                </Row>

                <Row className='marginbottom'>
                <Col sm={7} md={7}>
                    <Row>
                    <Col sm={4} md={4} className='pe-0'>
                    <Image className="w-100" src={manhike} />
                    </Col>
                    <Col sm={4} md={4} className='px-0'>
                    <Image className="w-100 imgScale" src={rockmountains} />
                    </Col>
                    <Col sm={4} md={4} className='ps-0'>
                    <Image className="w-100" src={hikerstop} />
                    </Col>
                   
                   
                    </Row>
                  
                </Col>

                <Col sm={5} md={5}></Col>
                </Row>
                
            </Container>
        </>
    );
};

export default Adv;