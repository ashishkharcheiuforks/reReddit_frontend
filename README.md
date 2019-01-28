# reReddit React SPA

This is an api client which acts as the frontend for and consumes the
[reReddit api](https://github.com/cdunn6754/reReddit_backend).
It is built with the following technologies:

- [React](https://reactjs.org/)
- [create-react-app](https://facebook.github.io/create-react-app/)
- [Redux](https://redux.js.org/)
- [react-router](https://reacttraining.com/react-router/)
- [react-bootstrap](https://react-bootstrap.github.io)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [redux-persist](https://github.com/rt2zz/redux-persist)

It is a clone of the real reddit client that I developed to grow and showcase my React skills.
It does not consume the reddit api, all data is generated with faker scripts, and aside from 'cloning' a
subset of the real reddit functionality this project is not associated at all with reddit.

On reReddit you can register as a user to:

- create subreddits and subscribe to others
- post in subreddits to which you are subscribed
- comment on both posts and other comments

**Visit a live demo:** [reReddit](https://rereddit.clintdunn.org)

## Installation

This repository will first need to be cloned to your local machine and have it's dependencies installed.
Assuming that you already have node and npm installed the following commands can be used:

```
$ git clone https://github.com/cdunn6754/reReddit_frontend.git ~/
$ cd reReddit_frontend
$ npm install
$ cp .env_example .env
 ... hopefully this works out
```

**Note:** I have npm version 6.5.0 and node version 11.7.0 installed on my development environment

Using this project requires connecting to an instance of the reReddit backend api. There are two use options:

1. Follow the installation instructions given at the
   [reReddit_backend](https://github.com/cdunn6754/reReddit_backend) project to install and run a dev version of the
   backend api on your local machine.
2. Use the deployed version of the api at [rereddit.api.clintdunn.org](https://rereddit.api.clintdunn.org).

#### Option 1:

After following the instructions given on the reReddit backend repository ReadMe you can start a dev version of the
this React application from the root directory of the project by running:

```
$ npm start
```

You should then be able to vist `localhost:3000` in your web browser to view the site.

#### Option 2:

The demo api is always available (almost always) so instead of setting up your own version of the backend, if you are just interested in checking out the React project contained in this repository it will save a little bit of time to just connect
to it.

By default the .env_example file, that we copied to .env above, assumes that when run with the node development server the
backend api will be available from your local machine at `localhost:8000`.
You need to modify the first line in the .env file to point at the deployed api.

```
REACT_APP_DEV_API_ROOT=https://rereddit.api.clintdunn.org/
REACT_APP_PROD_API_ROOT=https://rereddit.api.clintdunn.org/
```

Then you can run the development server for the React application from the terminal in the root project directory.

```
$ npm start
```

You should then be able to vist `localhost:3000` in your web browser to view the site.
