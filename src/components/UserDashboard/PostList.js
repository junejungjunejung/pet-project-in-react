import React from 'react';
import { connect } from 'react-redux';
import PostSummary from './PostSummary';
import selectPosts from '../../selectors/posts';


//dosn't auto render post lists after filter updated state(state is working).
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
    posts: selectPosts(state.posts, state.filters)
  };
};

export default connect(mapStateToProps)(PostList);