import * as actionsTypes from "./actionTypes";

export const addToCart = (id) => {
  return {
    type: actionsTypes.ADD_TO_CART,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: actionsTypes.REMOVE_ITEM,
    id,
  };
};
export const subtractQuantity = (id) => {
  return {
    type: actionsTypes.SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: actionsTypes.ADD_QUANTITY,
    id,
  };
};
