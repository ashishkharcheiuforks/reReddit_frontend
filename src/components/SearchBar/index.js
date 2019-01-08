import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Navbar,
  Nav,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

import FieldGroup from '../FieldGroup';
import { LoadingButton } from '../Buttons';
import { SEARCH_URL } from '../../urls';
import './styles.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: ''
    };
    
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }
  
  handleChange = (e) => {
    this.setState({query: e.target.value});
  }
  
  async handleSearchSubmit(e) {
    e.preventDefault();
    
    try{
      await this.props.handleSearchRequest(this.state.query);
    } catch {
      this.forceUpdate()
    }
    this.setState({query:''})
    this.props.history.push(SEARCH_URL);
  }
  
  render() {
    
    const {
      loading,
      error,
    } = this.props;
    
    return (
      <Navbar.Form pullLeft>
        <form onSubmit={this.handleSearchSubmit}>
          <FieldGroup
            id="search-bar-input"
            type="text"
            placeholder="Search..."
            name="search"
            onChange={this.handleChange}
            value={this.state.query}
          />
        <LoadingButton
          type="submit"
          loading={loading}
        >
          Search
        </LoadingButton>
        </form>

      </Navbar.Form>
    )
  }
  
}

SearchBar.propTypes = {
  handleSearchRequest: PropTypes.func,
}

export default withRouter(SearchBar);
