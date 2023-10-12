const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksRequest = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksError = (error) => {
  return {
    type: 'BOOKS_FAILURE',
    payload: error,
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequest());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
}

export {
  fetchBooks
};