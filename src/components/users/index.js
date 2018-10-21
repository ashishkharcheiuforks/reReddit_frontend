import React, { Component } from "react";
import axios from 'axios';
 
class Users extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        users: []
    }
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/users/')
      .then(response => this.setState({users: response.data}))
  }
  
  
  
  render() {
    const user_list = this.state.users.map(
      (user, idx) => <li key={idx}>{user.username}</li>
    )    
    return (
      <div>
        <h2>Users</h2>
        <p>List of Users:</p>
        <ol>
          {user_list}
        </ol>
      </div>
    );
  }
}
 
export default Users;