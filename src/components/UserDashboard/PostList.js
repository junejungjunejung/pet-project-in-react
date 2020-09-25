import React from 'react';
import PostSummary from './PostSummary';

const PostList = (props) => {
  return (
    <div className="list-body">
      { 
        props.posts.length === 0 ? (
          <div className="no-list-item">
            <span>No post here yet. Create new post!</span>
          </div>
        ) : (
            props.posts
            //visible posts based on pagination
            .slice((props.page - 1) * props.itemsPerPage, props.page * props.itemsPerPage)
            .map((post) => {
              return <PostSummary key={post.id} {...post} />;
            })
          )
      }
    </div>
  );
}



export default PostList;