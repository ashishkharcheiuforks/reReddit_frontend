import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchUserList from '../../actions/'
import UserList from '../../components/userList';
 
class UserListContainer extends Component {
  componentDidMount() {
    // axios.get('http://127.0.0.1:8000/users/')
    //   .then(response => this.setState({users: response.data}))
    //this.setState({users: getUserList()})
    this.props.fetchUserList();    
  }
  
  render() {
    return <UserList {...this.props} />
  }
}
 
const mapStateToProps = state => ({
  loading: state.loading,
  users: state.users,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchUserList: () => dispatch(fetchUserList())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer)