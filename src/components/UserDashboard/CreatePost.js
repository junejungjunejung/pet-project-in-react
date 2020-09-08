import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost } from '../../actions/post';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export class CreatePost extends React.Component {
  onSubmit = (post) => {
    this.props.startAddPost(post);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom> Create New Post </Typography>
        <div className="content-container">
          <Link to="/dashboard"> <ArrowBackIcon /> Back to Dashboard</Link>
          <PostForm
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

export default connect(undefined, mapDispatchToProps)(CreatePost);
