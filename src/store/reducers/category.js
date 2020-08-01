import * as actionsTypes from "../actions/categories/actionTypes";

const initialState = {
  categories: [],
  category: {},
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_LIST_KATEGORI:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return initialState;
  }
};

export default categories;
