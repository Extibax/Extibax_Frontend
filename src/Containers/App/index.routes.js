/* Modules */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

/* Components */
import Home from "../../Components/Home";
import Portfolio from "../../Components/Portfolio";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </BrowserRouter>
    );
  }
}

export default Routes;
