import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import {
  userAuthLogin,
  userAuthLogout,
  userAuthRegister,
} from '../../actions/UserAuth';

const NavBarContainer = connect(
  null,
  null,
)(NavBar)

const mapDispatchToProps = dispatch => (
  {
    loginUser: () => dispatch(userAuthLogin())
  }
)

export default NavBarContainer;

