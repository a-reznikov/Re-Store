const initialState = {
  books: [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard'
    }
  ]
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'BOOKS_LOADED':
      return {
        books: actions.payload
      };

    default: return state;
  }
}

export default reducer;