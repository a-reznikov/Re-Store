const initialState = {
  books: []
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case 'BOOKS_LOADED':
      return {
        books: actions.payload
      };

    default: return state;
  }
}

export default reducer;