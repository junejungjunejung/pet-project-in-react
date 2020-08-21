import React from 'react';
import { connect } from 'react-redux';
import CreatePostForm from './CreatePostForm';
import { startAddPost } from '../../actions/post';

import Button from '@material-ui/core/Button';//change to Link

export class CreatePostPage extends React.Component {
  onSubmit = (post) => {
    this.props.startAddPost(post);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Create New Post </h1>
          </div>
        </div>
        <div className="content-container">
          <Button>Back to Dashboard</Button>
          <CreatePostForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(CreatePostPage);
