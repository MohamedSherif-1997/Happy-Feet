import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import history from "./history";
import DashboardContainer from "./Container/DashboardContainer";
import MyOrdersDashboard from "./Container/MyOrders";
import Payment from "./Container/Payment";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/happy-shoes/dashboard"
          component={DashboardContainer}
        />
        <Route
          exact
          path="/happy-shoes/my-orders"
          component={MyOrdersDashboard}
        />
        <Route exact path="/happy-shoes/payment" component={Payment} />
        <Redirect to="/happy-shoes/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
