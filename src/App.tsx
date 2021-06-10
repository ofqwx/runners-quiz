import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { default as Route } from "./templates/PageRoute";
import DefaultLayout from "./layouts/DefaultLayout";
import { Home, Quiz, QuizResult } from "./pages";
import { QuizDataProvider } from "./data";
import { AnimatePresence } from "framer-motion";

export default function App(): JSX.Element {
  return (
    <QuizDataProvider>
      <AnimatePresence>
        <Router>
          <Switch>
            <Route path="/quiz" component={Quiz} layout={DefaultLayout} />
            <Route
              path="/result"
              component={QuizResult}
              layout={DefaultLayout}
            />
            <Route path="/" component={Home} layout={DefaultLayout} />
          </Switch>
        </Router>
      </AnimatePresence>
    </QuizDataProvider>
  );
}
