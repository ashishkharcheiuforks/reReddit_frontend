import React, { Component } from "react";
import PropTypes from "prop-types";

import FieldGroup from "../../FieldGroup";
import { LoadingButton } from "../../Buttons";
import "./styles.css";

class ModalRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleRegister(
      this.state.username,
      this.state.password,
      this.state.email
    );
  };

  render() {
    const { showLoginModal, loading } = this.props;

    return (
      <div id="register-form-container">
        <form id="userauth-register-form" onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsText"
            label="Username:"
            type="text"
            value={this.state.username}
            placeholder="username"
            name="username"
            onChange={this.handleChange}
            autoFocus
          />

          <FieldGroup
            id="formControlsPassword"
            label="Password:"
            type="password"
            value={this.state.password}
            placeholder="password"
            name="password"
            onChange={this.handleChange}
          />

          <FieldGroup
            id="formControlsEmail"
            label="Email:"
            type="email"
            value={this.state.email}
            placeholder="email"
            name="email"
            onChange={this.handleChange}
          />

          <div id="button-container">
            <LoadingButton
              bsStyle="primary"
              loading={loading}
              children="Register"
              type="submit"
            />
          </div>
        </form>

        <div className="login-redirect">
          <p>Already signed up?</p>
          <span onClick={showLoginModal}>LOG IN</span>
        </div>
      </div>
    );
  }
}

ModalRegisterForm.propTypes = {
  loading: PropTypes.bool,
  HandleRegister: PropTypes.func,
  showLoginModal: PropTypes.func
};

export default ModalRegisterForm;
