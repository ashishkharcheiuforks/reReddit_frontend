import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";

import "./styles.css";
import UserListContainer from '../../containers/users';
import Subs from "../subs";
import Posts from "../posts";
import NavBar from '../NavBar'

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/*<ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/subs">Subs</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
          </ul>*/}
          
          <NavBar />
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