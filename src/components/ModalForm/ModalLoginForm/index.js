import React, { Component } from "react";
import { withRouter } from "react-router";

import FieldGroup from "../../FieldGroup";
import FormButton from "../FormButton";
import { HOME_SUBREDDIT_URL } from "../../../urls";
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

  async handleSubmit() {
    try {
      await this.props.handleLogin(this.state.username, this.state.password);
      this.props.history.push(HOME_SUBREDDIT_URL);
    } catch {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div id="login-form-container">
        <form onSubmit={this.handleSubmit}>
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
            <FormButton
              bsStyle="primary"
              handleClick={this.handleSubmit}
              loading={this.props.loading}
              children="Login"
              type="submit"
            />

            <FormButton
              bsStyle="danger"
              handleClick={this.props.handleHide}
              loading={this.props.loading}
              children="Cancel"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ModalLoginForm);
