import React from "react";
import {Image} from "react-bootstrap";
import Tile from "../../assets/menuBackground.png";
import { Link } from "react-router-dom";
export const MenuTile = (props) => {
    const {component} =props
    return (
    <Link to={component.link} className="menu-tile">
        <Image src={Tile} alt={Tile} className="tile-image" id="image-tile"/>
        <p className="text-menu">{component.name}</p>
        
    </Link>)
}
