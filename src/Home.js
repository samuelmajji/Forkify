import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Form from "./Components/Form";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} /> {/* Home route */}
      <Route path="/form" component={Form} /> {/* Form route */}
      {/* Add more routes here */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
