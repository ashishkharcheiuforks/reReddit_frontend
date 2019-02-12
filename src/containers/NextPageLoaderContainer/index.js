import React from "react";
import { connect } from "react-redux";

import { NextPageLoader } from "../../components/Loaders";
import { getPostListNextPageUrl } from "../../reducers/postList";
import { makeSubPostListNextRequest } from "../../actions/Posts";

const NextPageLoaderContainer = props => {
  const { getNextPage } = props;
  return <NextPageLoader {...{ getNextPage }} />;
};

const mapStateToProps = (state, ownProps) => {
  const { usage = "postList" } = ownProps;

  if (usage === "postList") {
    return { nextPageUrl: getPostListNextPageUrl(state) };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { usage = "postList" } = ownProps;

  if (usage === "postList") {
    return {
      getNextPageWrapper: url => () => dispatch(makeSubPostListNextRequest(url))
    };
  }
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => ({
  getNextPage: propsFromDispatch.getNextPageWrapper(propsFromState.nextPageUrl)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(NextPageLoaderContainer);
