import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';

const ReadPost = (props) => {
  return (
    <React.Fragment>
      <Link to="/dashboard"> Back to dashboard </Link>
      <PostItem post={props.post}/>
    </React.Fragment>
  );
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(ReadPost);