import * as actionTypes from "../actions/users/actionTypes";

const initialState = {
  isLogin: false,
  users: [],
  user: {},
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case actionTypes.GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
      };
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isLogin: action.isLogin,
      };

    /* case actionTypes.DELETE_USER:
      return {
        ...state,
      }; */
    default:
      return initialState;
  }
};

export default users;
