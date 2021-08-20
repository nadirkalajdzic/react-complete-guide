import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import LandingPage from "../pages/LandingPage/LandingPage";

import CustomRoute from "./CustomRoute";

function Routes() {
  return (
    <Router basename="">
      <Switch>
        <CustomRoute exact path="/" component={LandingPage} title="Home" />
        <CustomRoute
          exact
          path="/landing"
          component={LandingPage}
          title="Home"
        />
        <CustomRoute exact path="/about" component={AboutPage} title="About" />
      </Switch>
    </Router>
  );
}

export default Routes;
