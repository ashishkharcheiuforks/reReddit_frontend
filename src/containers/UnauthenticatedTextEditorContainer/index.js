import React from "react";
import { connect } from "react-redux";

import UnauthenticatedTextEditor from "../../components/TextEditor/UnauthenticatedTextEditor";
import { showUserAuthModal } from "../../actions/UserAuthModal";

const UnauthenticatedTextEditorContainer = props => {
  const { showUserAuthModal } = props;

  return <UnauthenticatedTextEditor {...{ showUserAuthModal }} />;
};

const mapDispatchToProps = dispatch => ({
  showUserAuthModal: type => dispatch(showUserAuthModal(type))
});

export default connect(
  null,
  mapDispatchToProps
)(UnauthenticatedTextEditorContainer);
