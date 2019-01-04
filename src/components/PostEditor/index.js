import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from 'react-bootstrap';

import './styles.css';

class PostEditor extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      editorHtml: props.initialValue || '',
    }
    
    this.formats = [
      'header', 'font', 'size', 'bold', 'italic', 'underline',
      'strike', 'blockquote','list', 'bullet', 'indent', 'code'
    ]
    
    this.modules = {
      toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
        [
          {'list': 'ordered'}, {'list': 'bullet'},
          {'indent': '-1'}, {'indent': '+1'}
        ],
        ['clean']
      ],
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.quillNode = React.createRef();
  };
  
  componentDidMount() {
    this.quillNode.current.focus();
  };
  
  handleChange(html) {
    this.setState({
      editorHtml: html,
    })
  };
  
  handleSubmit = (editorHtml) => {
    
  }
