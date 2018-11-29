import React, { Component } from 'react';

import FieldGroup from '../../FieldGroup';
import FormButton from '../FormButton';
import './styles.css'

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
  
  handleSubmit = () => {
    this.props.handleLogin(this.state.username, this.state.password);
  }
  
  render = () => (
    <div id="login-form-container">
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
          label="Password:"
          type="password"
          value={this.state.password}
          placeholder='password'
          name='password'
          onChange={this.handleChange}
          />
        
        <div id="button-container">
          <FormButton
            bsStyle='primary'
            handleClick={this.handleSubmit}
            loading={this.props.loading}
            content='Login'
          />
        
          <FormButton
              bsStyle='danger'
              handleClick={this.props.handleHide}
              loading={this.props.loading}
              content='Cancel'
            />
        </div>
      </form>
    </div>
  );
}

export default ModalLoginForm;