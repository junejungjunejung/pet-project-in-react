export default (posts, { sortBy }) => {
  return posts.sort(function (a, b) {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'title') {
      return a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1;
    }
    return 0;
  });
};
