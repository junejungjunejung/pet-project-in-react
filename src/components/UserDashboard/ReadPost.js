import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ReadPost = (props) => {
  return (
    <div className="read-post-layout">
      <Link className="dashboard-link" to="/dashboard"> <ArrowBackIcon /> <span>Back to dashboard</span></Link>
      <PostItem post={props.post}/>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(ReadPost);