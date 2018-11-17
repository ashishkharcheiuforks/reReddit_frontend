import React, { Component } from 'react';

import FieldGroup from '../../FieldGroup';
import FormButton from '../FormButton';
import './styles.css'

class ModalRegisterForm extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }
  
  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
  }
  
  handleSubmit = () => {
    this.props.handleRegister(
      this.state.username,
      this.state.password,
      this.state.email
    );
  }
  
  render = () => (
    <div id="register-form-container">
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
        
        <FieldGroup
          id="formControlsEmail"
          label="Email:"
          type="email"
          value={this.state.email}
          placeholder='email'
          name='email'
          onChange={this.handleChange}
        />
      
        <div id="button-container">
          <FormButton
            bsStyle='primary'
            handleClick={this.handleSubmit}
            loading={this.props.loading}
            content='Register'
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
  )
}

export default ModalRegisterForm;
