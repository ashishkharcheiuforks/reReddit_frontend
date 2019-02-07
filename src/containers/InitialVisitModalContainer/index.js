import React from "react";
import { connect } from "react-redux";

import InitialVisitModal from "../../components/InitialVisitModal";
import { getInitialVisitFlag } from "../../reducers/initialVisit";
import { toggleInitialVisitFlag } from "../../actions/InitialVisit";

const InitialVisitModalContainer = props => {
  const { initialVisit, toggleFlag } = props;

  return <>{!initialVisit || <InitialVisitModal {...{ toggleFlag }} />}</>;
};

const mapStateToProps = state => ({
  initialVisit: getInitialVisitFlag(state)
});

const mapDispatchToProps = dispatch => ({
  toggleFlag: () => dispatch(toggleInitialVisitFlag)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialVisitModalContainer);
