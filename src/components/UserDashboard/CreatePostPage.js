import React from 'react';
import { connect } from 'react-redux';
import CreatePostForm from './CreatePostForm';
import { startAddPost } from '../../actions/post';

import Link from '@material-ui/core/Link';

export class CreatePostPage extends React.Component {
  onSubmit = (post) => {
    this.props.startAddPost(post);
    this.props.history.push('/dashboard');
    console.log(post)
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
          <Link>Back to Dashboard</Link>
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
