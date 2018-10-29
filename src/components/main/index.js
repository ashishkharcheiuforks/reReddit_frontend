import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";

import "./styles.css";
import UserListContainer from '../../containers/users';
import Subs from "../subs";
import Posts from "../posts";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>reReddit</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/subs">Subs</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Posts}/>
              <Route path="/subs" component={Subs}/>
              <Route path="/users" component={UserListContainer}/>              
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;