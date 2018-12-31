import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './styles.css';

class TextEditor extends Component {
  constructor(props) {
    super(props);
        
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
  }
  

  render () {
    return (
      <div className='text-editor-container'>
        <ReactQuill
          value={this.props.editorHtml}
          onChange={this.props.handleChange}
          placeholder={this.props.placeHolder}
          modules={this.modules}
          formats={this.formats}
        />
      </div>
    )
  }
}

export default TextEditor;
