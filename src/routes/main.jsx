import {Home, Trade, Exchange} from "../pages";
import {Switch, Route,Redirect} from "react-router-dom";
import {ROUTES,TRADE_ROUTES} from "../common";

const Routes = () => (
    <div>
        <Switch>
            
            <Route exact path={ROUTES.HOME} component={Home} />
            <Redirect from={ROUTES.TRADE} to={TRADE_ROUTES.EXCHANGE} />
            {/* <Route exact path={ROUTES.TRADE} component={Trade} /> */}
            <Route exact path={TRADE_ROUTES.EXCHANGE} component={Exchange} />
        </Switch>
    </div>
);

export default Routes;