import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Initiate  from "./components/layout/Initiate";
import Process from "./components/layout/Process";
import Navbar from "./components/layout/Navbar";
import Final from "./components/layout/Final";
import './App.css';

// import {}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
         <div
            id="page-container"
            className="page-sidebar-fixed page-header-fixed"
          >
            <Navbar/>
              <Route exact path="/start" component={Initiate} />
              <Route exact path="/process" component={Process} />
              <Route exact path="/final" component={Final} />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
