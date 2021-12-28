import React from "react";
import {SIDE_MENUS, MENU_TYPE} from "../../common";
import { useParams } from "react-router-dom";
const ManageSideBar = (props) => {
    const selectedMenu = useParams();
    console.log(selectedMenu,'selcted');
    return (
        <div className="side-bar-menu">
            {SIDE_MENUS[MENU_TYPE.TRADE].map((e,i)=>{
                return (
                    <span className= {`side-menu-text`}>{e.menu}</span>
                )
            })}
        </div>
    )
}

export default ManageSideBar;