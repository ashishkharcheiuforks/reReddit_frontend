import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";

import './index.css';
import store from './store'
import UserListContainer from './containers/users';
import Subs from "./components/subs";
import Posts from "./components/posts";
import NavBar from './components/NavBar';

ReactDOM.render(
  <Provider store = {store}>
      <BrowserRouter>
        <div>
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
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
