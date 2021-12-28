import React from "react";
import {Navbar,Container,Nav, Row,Col,Button,Image } from "react-bootstrap";
import Logo from "../../assets/logoWithText.png";

const Header = (props) => {
    return (
        
            <Container fluid>
                <Row className="header-row">
                    <Col>
                        
                        <img src={Logo} alt={Logo} className="logo"/>                                
                         
                        
                    </Col>
                    <Col className="content-list" md={3}>
                                                   
                            <Button className="connect-button">
                                Connect
                            </Button>
                        
                    </Col>
                
                </Row>
                
                
            </Container>
        
    )
};

export default Header;

