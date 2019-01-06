import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Navbar,
  Nav,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

import FieldGroup from '../FieldGroup';
import { LoadingButton } from '../Buttons';
import './styles.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      query: ''
    };
  }
  
  handleChange = (e) => {
    this.setState({query: e.target.value});
  }
  
  handleSearchSubmit = (e) => {
    e.preventDefault();
    
    this.props.handleSearchRequest(this.state.query);
    this.setState({query: ''});
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

export default SearchBar;
