import React from 'react';
import { Button } from 'react-bootstrap';

import './styles.css';

// Playing around with HOC to conditionally render a subscribe
// or unsubscribe button
const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <EitherComponent {...props}/>
    : <Component {...props}/>
  
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

const subscriptionConditionFn = props => props.subscribed;

const SubscriptionButton = withEither(
  subscriptionConditionFn,
  UnSubscribeButton
)(SubscribeButton);

export default SubscriptionButton;
