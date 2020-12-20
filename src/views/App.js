// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "../index.css";

// Components
import NavBar from "../components/NavBar";
import Historic from "./Historic";
import Current from "./Current";

function App() {
  
  return (
    <Router>
      <NavBar></NavBar>

      <Switch>
        <Route path="/historic">
          <Historic />
        </Route>
        <Route path="/current">
          <Current />
        </Route>
        <Route path="/search">
          <h1>search page wip</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
