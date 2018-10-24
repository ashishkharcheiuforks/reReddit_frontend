import React, {Component} from 'react';

class UserList extends Component {
  render() {
    const {users, loading} = this.props;
    
    if (loading) {
      return (
        <h3> This is loading </h3>
      );
    }
      
    const userList = users.map((user) =>
      const { 
        usename,
        karma
      } = user;
      
      return (<li> {username} has {karma} karma points </li>);
    )
    return (
      <ul> userList </ul>
    );
  }
}

export default UserList