import React from 'react';
import { Col, Container, Nav, Navbar, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header-style">
            <Navbar variant="dark">
                <Container>
                    <Row>
                        <Col className="header-nav">
                            <Nav className="">
                                <Nav.Link as={Link} to="/Home" >Home</Nav.Link>
                                <Nav.Link as={Link} to="/services" >Services</Nav.Link>
                                <Nav.Link as={Link} to="/about" >About</Nav.Link>
                                <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                            </Nav>
                        </Col>

                    </Row>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;