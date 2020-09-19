import React from 'react';
import { connect } from 'react-redux';
import { startRemovePost, startEditPost} from '../../actions/post';
import PostForm from './PostForm';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export class EditPost extends React.Component {
  onSubmit = (post) => {
    this.props.startEditPost(this.props.post.id, post);
    this.props.history.push('/dashboard');
  };
  onRemove = () => {
    this.props.startRemovePost({ id: this.props.post.id });
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div className="edit-post-layout">
        <Typography variant="h4" gutterBottom> Edit Post </Typography>
        <Link className="dashboard-link" to="/dashboard"> <ArrowBackIcon /> Back to dashboard </Link>
        <PostForm
          post={this.props.post}
          onSubmit={this.onSubmit}
        />
        <Button variant="contained" color="primary" disableElevation onClick={this.onRemove} >Delete Post</Button>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: (data) => dispatch(startRemovePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
