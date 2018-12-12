import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import { store, persistor } from './store'
import SubredditContainer from './containers/SubredditContainer';
import NavBarContainer from './containers/NavBarContainer';
import UserAuthModalContainer from './containers/UserAuthModalContainer';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <NavBarContainer />
          <UserAuthModalContainer />
          <div className='main-layout'>
              <Switch>
                <Route
                  exact
                  path="/r/:subredditTitle/:createPost"
                  render={ (props) =>
                    <SubredditContainer
                      {...props}
                      skinny
                      primaryComponent='CreatePost'
                    />}
                />
                <Route
                  exact
                  path="/r/:subredditTitle/postDetail/:postId"
                  render={ (props) =>
                    <SubredditContainer
                      {...props}
                      primaryComponent='PostDetail'
                    />}
                />
                <Route
                  exact
                  path="/r/:subredditTitle"
                  render={ (props) => <SubredditContainer
                      {...props}
                      primaryComponent='PostList'
                    />}
                />
                <Route
                  exact
                  path="/"
                  render={ (props) => <SubredditContainer
                      {...props}
                      primaryComponent='PostList'
                    />}
                />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
