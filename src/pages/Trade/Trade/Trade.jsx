import React from "react";
import {Header} from "../../../components";
import {TradeRoutes} from "../../../routes";
import {AppLayout} from "../../../hoc";
const Trade = (props) => {
    return (
        <div className="home-content">
            <Header />
            
            <TradeRoutes />
                    
            
        </div>
    )
};

export default AppLayout(Trade);