import React from 'react';

import Container from '@material-ui/core/Container';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

import PostItem from './PostItem';

const PostList = () => {
  return (
    <React.Fragment>
      <Container>
        <PostItem />
      </Container>
    </React.Fragment>
  );
}

export default PostList;