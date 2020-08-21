import database from '../firebase/firebase';

// ADD_POST
export const addPost = (post) => ({
  type: 'ADD_POST',
  post
});

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      postTitle = '',
      note = '',
      createdAt = 0
    } = postData;
    const post = { postTitle, note, createdAt };

    return database.ref(`users/${uid}/post`).push(post).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...post
      }));
    });
  };
};