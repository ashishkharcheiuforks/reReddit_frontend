import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import TextEditor from '../../components/TextEditor';
import FieldGroup from '../../components/FieldGroup';

class CreatePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedHtml: '',
      editorHtml: '',
      title:'',
    }
    
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  
  handleEditorChange (html) {
    this.setState({editorHtml: html});
  }
  
  render () {
    return (
    <form>

      <TextEditor
          handleChange={this.handleTextEditorChange}
          placeHolder="Text (Optional)"
          editorHtml={this.state.editorHtml}
       />
     <Button
       type="submit"
       onClick={() => this.handleSubmit}
     >
      Submit
     </Button>
    </form>
  )
  }
}

export default connect(
  null,
  null
)(CreatePostContainer);
