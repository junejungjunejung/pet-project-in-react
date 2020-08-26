import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import PostItem from './PostItem';

const PostList = (props) => {
  return (
    <Container>
      <div className="list-body">
       {console.log(props)}
        { 
          props.posts.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No post</span>
            </div>
          ) : (
              props.posts.map((post) => {
                return <PostItem key={post.id} {...post} />;
              })
            )
        }
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostList);