import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import TextEditor from "../TextEditor";
import FieldGroup from "../FieldGroup";
import { ErrorAlertWithError } from "../AlertMessage";
import FormButton from "../ModalForm/FormButton";
import "./styles.css";

class CreateSubreddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange = e => this.setState({ title: e.target.value });

  handleDescriptionChange = e => this.setState({ description: e.target.value });

  async handleSubmit() {
    try {
      await this.props.handleCreateSubreddit({
        title: this.state.title,
        description: this.state.description
      });
      this.props.history.push(`/r/${this.state.title}`);
    } catch {
      this.forceUpdate();
    }
  }

  render() {
    const { errorMessage, loading, handleCreateSubreddit } = this.props;

    return (
      <div className="create-subreddit-container">
        <div id="picture-container">
          <a
            href={`https://www.pexels.com/photo/assorted-colored-wooden-planks-985287/`}
            target="_blank"
          >
            Photo by Magda Ehlers from Pexels
          </a>
        </div>
        <div className="content-container">
          <div className="form-container">
            <h2>Create a Subreddit</h2>
            <hr />
            <ErrorAlertWithError>{errorMessage}</ErrorAlertWithError>

            <form>
              <div className="input-container">
                <FieldGroup
                  id="title-input"
                  placeholder="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                  name="title"
                  autoComplete="off"
                />
                <FieldGroup
                  id="description-input"
                  placeholder="description"
                  componentClass="textarea"
                  onChange={this.handleDescriptionChange}
                />
              </div>
              <div className="submit-button">
                <FormButton
                  bsStyle="primary"
                  handleClick={this.handleSubmit}
                  loading={loading}
                >
                  create
                </FormButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateSubreddit.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  handleCreateSubreddit: PropTypes.func
};

export default withRouter(CreateSubreddit);
