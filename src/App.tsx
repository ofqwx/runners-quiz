import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { default as Route } from "./templates/PageRoute";
import DefaultLayout from "./layouts/DefaultLayout";
import { Home, Quiz } from "./pages";

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/quiz" component={Quiz} layout={DefaultLayout} />
        <Route path="/" component={Home} layout={DefaultLayout} />
      </Switch>
    </Router>
  );
}
