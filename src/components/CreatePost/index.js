import React , {Component} from 'react';
import PropTypes from 'prop-types';
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
      title:'',
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleTitleChange = (e) => this.setState({title: e.target.value});
  
  async handleSubmit(editorHtml) {
    
    try {
      const postCreation = await this.props.handleCreatePost(
        this.state.title,
        editorHtml,
        this.props.subredditTitle,
      )
      this.props.history.replace(`/r/${this.props.subredditTitle}`);
    } catch {
      this.forceUpdate()
    }
  }
  
  render() {
    
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
            handleCommentSubmit={this.handleSubmit}
            usage="create"
            placeholder="Text (optional)"
          />

        </form>
      </div>
  )
  }
}

CreatePost.propTypes = {
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  subredditTitle: PropTypes.string,
  handleCreatePost: PropTypes.func,
};

export default withRouter(CreatePost);
