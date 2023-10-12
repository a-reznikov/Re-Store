const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
};

const booksRequest = () => {
  return {
    type: 'BOOKS_REQUEST',
  };
};

const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error,
  };
};

export {
  booksLoaded,
  booksRequest,
  booksError
};