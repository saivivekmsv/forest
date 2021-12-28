import React from "react";
import { withRouter } from "react-router-dom";
import {Header} from "../components";
const AppLayout = (Component) => {
    const WholeLayout = () => {
        return (
            <div className="home-content">
            <Header />         
            
             </div>
        )
    };
    return withRouter(WholeLayout);
};

export default AppLayout;