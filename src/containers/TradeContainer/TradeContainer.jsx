import React from "react";
import { Header, ManageSideBar } from "../../components";

const TradeContainer = (props) => {
    return (
        <div>
            <div className="display-menu-content">
            <ManageSideBar />
            <div className="content-display"></div>
            </div>
            
        </div>
    )
};

export default TradeContainer;