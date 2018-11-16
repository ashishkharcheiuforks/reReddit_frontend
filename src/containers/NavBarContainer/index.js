import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import UserAuthNav from '../../components/UserAuthNav';
import { showUserAuthModal } from '../../actions/UserAuthModal';
import { userAuthLogout } from '../../actions/UserAuth';
import { middleWareTest } from '../../actions/MiddleWareTest';


class NavBarContainer extends Component {
  
  render = () => (
    <NavBar>
      <UserAuthNav
        showModal={this.props.showModal}
        username={this.props.username}
        handleLogout={this.props.handleLogout}
        middleWareTest={this.props.middleWareTest}
      />
    </NavBar>
  );
  
}

const mapStateToProps = state => (
  {
    username: state.userAuth.username,
  }
);

const mapDispatchToProps = dispatch => (
  {
    showModal: () => dispatch(showUserAuthModal("login")),
    handleLogout: () => dispatch(userAuthLogout()),
    middleWareTest: (username, password) => dispatch(middleWareTest(username,password)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure: false},
)(NavBarContainer)
