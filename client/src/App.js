import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/About" exact component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;