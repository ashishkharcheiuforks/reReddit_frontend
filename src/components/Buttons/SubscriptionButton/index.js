import React from "react";
import { Button } from "react-bootstrap";
import { compose } from "recompose";

import "./styles.css";
import { withMaybe, withEither } from "../../../utilities/HOC";

const SubscribeButton = ({ makeSubscriptionRequest, subredditTitle }) => (
  <Button
    className="subscribe-button"
    onClick={() => makeSubscriptionRequest(subredditTitle, "sub")}
  >
    SUBSCRIBE
  </Button>
);

const UnSubscribeButton = ({ makeSubscriptionRequest, subredditTitle }) => (
  <Button
    className="subscribe-button"
    onClick={() => makeSubscriptionRequest(subredditTitle, "unsub")}
  >
    UNSUBSCRIBE
  </Button>
);

const subscriptionConditionFn = props =>
  props.userSubscriptions.includes(props.subredditTitle);
const authenticatedConditionFn = props => props.authenticatedUsername;

const SubscriptionButton = compose(
  withMaybe(authenticatedConditionFn),
  withEither(subscriptionConditionFn, UnSubscribeButton)
)(SubscribeButton);

export default SubscriptionButton;
