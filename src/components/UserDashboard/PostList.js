import React from 'react';
import { connect } from 'react-redux';
import PostSummary from './PostSummary';

const PostList = (props) => {
  return (
    <div className="list-body">
      { 
        props.posts.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No post</span>
          </div>
        ) : (
            props.posts.map((post) => {
              return <PostSummary key={post.id} {...post} />;
            })
          )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostList);