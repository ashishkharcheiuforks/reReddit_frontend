import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import UserAuthNav from '../../components/UserAuthNav';
import { showUserAuthModal } from '../../actions/UserAuthModal';


class NavBarContainer extends Component {
  
  render = () => (
    <NavBar>
      <UserAuthNav showModal={this.props.showModal} />
    </NavBar>
  );
  
}

const mapDispatchToProps = dispatch => (
  {
    showModal: () => dispatch(showUserAuthModal("login")),
  }
);

export default connect(
  null,
  mapDispatchToProps,
  null,
  {pure: false},
)(NavBarContainer)



