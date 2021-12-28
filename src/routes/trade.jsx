import React from "react";
import { Switch, Route} from "react-router-dom";
import {Exchange} from "../pages";
import {TRADE_ROUTES} from "../common";

export const TradeRoutes = () => {
    return (
    <Switch>
        <Route exact path={TRADE_ROUTES.EXCHANGE} component={Exchange} />
    </Switch>)
}