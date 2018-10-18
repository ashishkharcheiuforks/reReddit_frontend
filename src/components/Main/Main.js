import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";

import Users from "../Users";
import Subs from "./Subs";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>reReddit</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/subs">Subs</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/subs" component={Stuff}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;