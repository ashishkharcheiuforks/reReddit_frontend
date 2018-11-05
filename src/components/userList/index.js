import React, {Component} from 'react';

class UserList extends Component {
  render() {
    const {users, loading, error} = this.props;
    
    if (loading) {
      return (
        <h3> This is loading </h3>
      );
    }
    
    if (error) {
      return <p>{error.message}</p>;
    }
      
    const userList = users.map((user, idx) => {
      const { 
        username,
        karma
      } = user;
      return (<li key={idx}> {username} has {karma} karma</li>);
    });
    
    return (
      <ul> {userList} </ul>
    );
  }
}

export default UserList;