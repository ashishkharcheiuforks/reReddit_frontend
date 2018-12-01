import React from 'react';
import { Button } from 'react-bootstrap';
import { compose } from 'recompose';

import './styles.css';

// Playing around with HOC to conditionally render a subscribe
// or unsubscribe button
const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <EitherComponent {...props}/>
    : <Component {...props}/>

const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <Component {...props} />
    : null
  
const SubscribeButton = ({makeSubscriptionRequest, title}) =>
  <Button
    className='sidebar-button'
    id='subscribe-button'
    onClick= {() => makeSubscriptionRequest(title, 'sub')}
    >
    SUBSCRIBE
  </Button>

const UnSubscribeButton = ({makeSubscriptionRequest, title}) =>
  <Button
    className='sidebar-button'
    id='subscribe-button'
    onClick= {() => makeSubscriptionRequest(title, 'unsub')}
    >
    UNSUBSCRIBE
  </Button>

const subscriptionConditionFn = props => props.userSubscriptions.includes(props.title);
const authenticatedConditionFn = props => props.authenticatedUser;

const SubscriptionButton = compose(
  withMaybe(authenticatedConditionFn),  
  withEither(subscriptionConditionFn, UnSubscribeButton),
)(SubscribeButton);

export default SubscriptionButton;
