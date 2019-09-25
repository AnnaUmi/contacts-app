import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";

import "./App.css";

function App() {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
