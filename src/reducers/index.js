
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};

const updateStateCartItem = (bookInCart, id, book, index, state, isAdded) => {
  if (bookInCart) {
    const count = isAdded ? bookInCart.count + 1 : bookInCart.count - 1;
    const total = isAdded ? bookInCart.total + book.price : bookInCart.total - book.price;
    const updateItem = {
      ...bookInCart,
      count: count,
      total: total,
    }
    if (count) {
      return {
        ...state,
        cartItems: state.cartItems.toSpliced(index, 1, updateItem),
      }
    } else {
      return {
        ...state,
        cartItems: state.cartItems.toSpliced(index, 1),
      }
    }

  } else {
    const newItem = {
      id: id,
      title: book.title,
      count: 1,
      total: book.price,
    }
    return {
      ...state,
      cartItems: [
        ...state.cartItems,
        newItem
      ]
    }

  }

}

const reducer = (state = initialState, action) => {

  console.log(action.type);
  const id = action.payload;
  const index = state.cartItems.findIndex((item) => item.id === id);

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case 'BOOKS_ADDED_TO_CART':
      const isAdded = action.isAdded;
      const book = state.books.find((item) => item.id === id);
      const bookInCart = state.cartItems[index];

      return updateStateCartItem(bookInCart, id, book, index, state, isAdded);
    case 'BOOKS_DELETED_FROM_CART':

      return {
        ...state,
        cartItems: state.cartItems.toSpliced(index, 1),
      }


    default:
      return state;
  }
};

export default reducer;
