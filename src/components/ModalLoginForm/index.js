import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import FieldGroup from '../FieldGroup';

class ModalLoginForm extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleSubmit= () => {
    const credentials = {
      username: this.state.username,
      password: this.state.password,
    }
    this.props.handleLogin(credentials);
  }
  
  render = () => (
    <form>
      <FieldGroup
        id="formControlsText"
        label="Username:"
        type="text"
        value={this.state.username}
        placeholder='username'
        name='username'
        onChange={this.handleChange}
        />
      
      <FieldGroup
        id="formControlsPassword"
        type="password"
        value={this.state.password}
        placeholder='password'
        name='password'
        onChange={this.handleChange}
        />  
      
      <Button onClick={() => this.handleSubmit()}>
        Login
      </Button>    
    
    </form>
  );
}

export default ModalLoginForm;