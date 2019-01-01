import React , {Component} from 'react';
import { withRouter } from 'react-router';

import TextEditor from '../TextEditor';
import FieldGroup from '../FieldGroup';
import { ErrorAlert } from '../AlertMessage';
import { withMaybe } from '../../utilities/HOC';
import FormButton from '../ModalForm/FormButton';
import './styles.css';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: '',
      title:'',
    }
    
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleEditorChange (html) {
    this.setState({editorHtml: html});
  }
  
  handleTitleChange = (e) => this.setState({title: e.target.value});
  
  async handleSubmit() {
    
    try {
      const postCreation = await this.props.handleCreatePost(
        this.state.title,
        this.state.editorHtml,
        this.props.title,
      )
      this.props.history.replace(`/r/${this.props.subredditTitle}`);
    } catch {
      this.forceUpdate()
    }
  }
  
  render () {
    
    const {
      errorMessage,
      loading,
    } = this.props;
      
    const CreatePostErrorAlert = withMaybe((props) => props.children)(ErrorAlert);
      
    return (
      <div className="create-post-container">
        <div className="alert-message-container">
          <CreatePostErrorAlert children={this.props.errorMessage}/>
        </div>
        <form>
          <div className='title-input-container'>
            <FieldGroup
              id="create-post-title"
              placeholder='Title'
              type='text'
              value={this.state.title}
              onChange={this.handleTitleChange}
              name='username'
            />
          </div>
          <TextEditor
            handleChange={this.handleEditorChange}
            placeHolder="Text (Optional)"
            editorHtml={this.state.editorHtml}
          />
          <div className="submit-button">
            <FormButton
             bsStyle="primary"
             handleClick={this.handleSubmit}
             loading={loading}
            >
              Create Post
            </FormButton>
            
          </div>

        </form>
      </div>
  )
  }
}

export default withRouter(CreatePost);
