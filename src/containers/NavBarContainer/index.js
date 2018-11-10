import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import UserAuthNav from '../../components/UserAuthNav';
import { showUserAuthModal } from '../../actions/UserAuthModal';


class NavBarContainer extends Component {
  
  render = () => (
    <NavBar>
      <UserAuthNav
        showModal={this.props.showModal} 
        token={this.props.token} 
      />
    </NavBar>
  );
  
}

const mapStateToProps = state => (
  {
    token: state.userAuth.token,
  }
);

const mapDispatchToProps = dispatch => (
  {
    showModal: () => dispatch(showUserAuthModal("login")),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure: false},
)(NavBarContainer)



