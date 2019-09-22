import React from "react";
import Rocket from "./components/Rocket";
import MenuBar from "./components/MenuBar";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <MenuBar />
        <div className="App">
          <Rocket />
        </div>
        <Route
          path="/eduardolanda"
          component={() => {
            window.location.href = "http://www.eduardolanda.ca";
            return null;
          }}
        />
        <Route
          path="/linkedin"
          component={() => {
            window.location.href = "https://www.linkedin.com/in/eduardolanda";
            return null;
          }}
        />
        <Route
          path="/github"
          component={() => {
            window.location.href = "https://www.github.com/eduardolanda";
            return null;
          }}
        />
      </Router>
    </div>
  );
};

export default App;
