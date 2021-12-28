import React from "react";
import {Container,Col, Row} from "react-bootstrap";
import { Header } from "../../components";
import {MenuTile} from "./MenuTile";
import {menuItems} from "../../common";
import { Link } from "react-router-dom";

const HomeContainer = (props) => {
    return (
        <div className="home-content">
            <Header />
            <Container fluid className="menu-container">
            <Row className="menu-row">
            {menuItems.map((e,i) => {
                return (
                    <MenuTile component={e}/>
                )
            })
            }
            </Row>
            </Container>
        </div>
    );
};

export default HomeContainer;