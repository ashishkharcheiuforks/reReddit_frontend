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
        username={this.props.username} 
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
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure: false},
)(NavBarContainer)



