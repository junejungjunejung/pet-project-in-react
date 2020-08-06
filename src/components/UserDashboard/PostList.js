import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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