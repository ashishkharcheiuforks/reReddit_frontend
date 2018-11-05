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
import UserListContainer from './containers/UsersListContainer';
import PostListContainer from './containers/PostListContainer';
import Subs from './components/subs';
import NavBar from './components/NavBar';

ReactDOM.render(
  <Provider store = {store}>
        <BrowserRouter>
          <div>
            <NavBar />
            <div className='main-layout'>
              <div className="content">
                <Switch>
                  <Route exact path="/" component={PostListContainer}/>
                  <Route path="/subs" component={Subs}/>
                  <Route path="/users" component={UserListContainer}/>              
                </Switch>
              </div>
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
