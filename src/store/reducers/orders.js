import * as actionsTypes from "../actions/orders/actionTypes";

const initialState = {
  isOrdered: false,
  orders: [],
  order: {},
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_LIST_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case actionsTypes.GET_LIST_ORDER_BY_UID:
      return {
        ...state,
        orders: action.payload,
      };
    case actionsTypes.GET_ORDER_BY_ID:
      return {
        ...state,
        order: action.payload,
      };
    case actionsTypes.UPDATE_ORDER:
      return {
        ...state,
      };
    case actionsTypes.CREATE_ORDER:
      return {
        ...state,
        isOrdered: action.isOrdered,
      };
    default:
      return initialState;
  }
};

export default orders;
