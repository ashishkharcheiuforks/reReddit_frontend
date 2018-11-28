import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import UserAuthNav from '../../components/UserAuthNav';
import { showUserAuthModal } from '../../actions/UserAuthModal';
import { userAuthLogout } from '../../actions/UserAuth';


class NavBarContainer extends Component {
  render = () => (
    <NavBar subscribed={this.props.subscribed}>
      <UserAuthNav
        showModal={this.props.showModal}
        username={this.props.username}
        handleLogout={this.props.handleLogout}
      />
    </NavBar>
  );
}

const mapStateToProps = state => (
  {
    username: state.userAuth.username,
    subscribed: state.userAuth.subs,
  }
);

const mapDispatchToProps = dispatch => (
  {
    showModal: (displayType) => dispatch(showUserAuthModal(displayType)),
    handleLogout: () => dispatch(userAuthLogout()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure: false},
)(NavBarContainer)
