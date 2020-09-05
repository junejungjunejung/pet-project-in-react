// Filters Reducer

const filtersReducerDefaultState = {
  sortBy: 'date',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_TITLE':
      return {
        sortBy: 'title'
      };
    case 'SORT_BY_DATE':
      return {
        sortBy: 'date'
      };
    default:
      return state;
  }
};
