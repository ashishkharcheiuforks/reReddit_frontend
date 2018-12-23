import React, { Component, Fragment } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from 'react-bootstrap';

import './styles.css';

class CommentEditor extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      editorHtml: '',
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
  }

  componentDidMount() {
    if (!this.props.rootComment) {
      this.quillNode.current.focus();
    }
  }
  
  handleChange(html) {
    this.setState({
      editorHtml: html,
    })
  }
  
  handleSubmit = (editorHtml) => {
    this.setState({
      editorHtml: '',
    })
    
    const commentData ={
      body: editorHtml,
      parentPk: this.props.parentPk,
      rootComment: this.props.rootComment,
    }
    
    this.props.handleCreateComment(commentData);
  }
  
  render() {
    
    return (
      <Fragment>
        <ReactQuill
          value={this.state.editorHtml}
          onChange={this.handleChange}
          placeholder='What are your thoughts?'
          modules={this.modules}
          formats={this.formats}
          ref={this.quillNode}
        />
      <Button
        onClick={() => this.handleSubmit(this.state.editorHtml)}
        className='comment-submit-button'
      >
        Comment
      </Button>
      </Fragment>
    )
  }
}

export default CommentEditor;
