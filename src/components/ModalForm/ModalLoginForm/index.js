import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import FieldGroup from "../../FieldGroup";
import { LoadingButton } from "../../Buttons";
import "./styles.css";

class ModalLoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await this.props.handleLogin(this.state.username, this.state.password);
      //this.props.history.push(HOME_SUBREDDIT_URL);
    } catch {
      this.forceUpdate();
    }
  }

  render() {
    const { showRegisterModal, loading } = this.props;

    return (
      <div id="login-form-container">
        <form id="userauth-login-form" onSubmit={this.handleSubmit}>
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

          <div id="button-container">
            <LoadingButton
              bsStyle="primary"
              loading={loading}
              children="Sign in"
              type="submit"
            />
          </div>
        </form>

        <div className="register-redirect">
          <p>New to reReddit?</p>
          <span onClick={showRegisterModal}>REGISTER</span>
        </div>
      </div>
    );
  }
}

ModalLoginForm.propTypes = {
  loading: PropTypes.bool,
  handleHide: PropTypes.func,
  HandleRegister: PropTypes.func,
  showRegisterModal: PropTypes.func
};

export default withRouter(ModalLoginForm);
