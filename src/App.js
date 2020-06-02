import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import EditUsers from "./Components/EditUsers";

import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./Contextt/GlobalState";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUsers} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
