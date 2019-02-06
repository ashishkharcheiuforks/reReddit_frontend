import React from "react";
import { connect } from "react-redux";

import UserAuthModal from "../../components/UserAuthModal";
import ModalUpdateForm from "../../components/ModalForm/ModalUpdateForm";
import { makeUserUpdateRequest } from "../../actions/UserAuth";
import { getAuthUserLoading } from "../../reducers/userAuth";

const UpdateModalContainer = props => {
  const { handleUpdate, loading, messageProps } = props;

  const subtitle = `
    Here you can update your user profile email and/or password.
  `;

  return (
    <UserAuthModal
      title="Edit profile"
      subtitle={subtitle}
      messageProps={messageProps}
      formComponent={
        <ModalUpdateForm
          {...{
            handleUpdate,
            loading
          }}
        />
      }
    />
  );
};

const mapStateToProps = state => ({
  loading: getAuthUserLoading(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleUpdate: updateData =>
    dispatch(makeUserUpdateRequest(ownProps.username, updateData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateModalContainer);
