import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import {
  Home,
  Error,
  Meals,
  AuthWrapper,
  Pricing,
  CtaPage,
} from "./pages";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/meals">
            <Meals />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/cta">
            <CtaPage />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
};

export default App;
