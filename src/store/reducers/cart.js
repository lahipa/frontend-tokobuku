import * as actionTypes from "../actions/cart/actionTypes";

const initialState = {
  carts: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_CART:
      return {
        ...state,
        carts: action.payload,
      };
    case actionTypes.UPDATE_CART_LIST:
      return {
        ...state,
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
      };
    case actionTypes.ADD_TO_CART:
      console.log(state, "state data");
      return {
        ...state,
      };
    default:
      return initialState;
  }

  //  let addedItem = state.items.find((item) => item.id === action.id);

  //   switch (action.type) {
  //     case actionTypes.ADD_TO_CART: //INSIDE HOME COMPONENT
  //       let existed_item = state.addedItems.find((item) => action.id === item.id);
  //       if (existed_item) {
  //         addedItem.quantity += 1;
  //         return {
  //           ...state,
  //           total: state.total + addedItem.price,
  //         };
  //       } else {
  //         addedItem.quantity = 1;
  //         //calculating the total
  //         let newTotal = state.total + addedItem.price;

  //         return {
  //           ...state,
  //           addedItems: [...state.addedItems, addedItem],
  //           total: newTotal,
  //         };
  //       }
  //     case actionTypes.REMOVE_ITEM:
  //       let itemToRemove = state.addedItems.find((item) => action.id === item.id);
  //       let new_items = state.addedItems.filter((item) => action.id !== item.id);

  //       //calculating the total
  //       let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
  //       console.log(itemToRemove);
  //       return {
  //         ...state,
  //         addedItems: new_items,
  //         total: newTotal,
  //       };
  //     case actionTypes.ADD_QUANTITY: //INSIDE CART COMPONENT
  //       addedItem.quantity += 1;
  //       let newTotalAddQty = state.total + addedItem.price;
  //       return {
  //         ...state,
  //         total: newTotalAddQty,
  //       };
  //     case actionTypes.SUB_QUANTITY:
  //       //if the qt == 0 then it should be removed
  //       if (addedItem.quantity === 1) {
  //         let new_items = state.addedItems.filter(
  //           (item) => item.id !== action.id
  //         );
  //         let newTotal = state.total - addedItem.price;
  //         return {
  //           ...state,
  //           addedItems: new_items,
  //           total: newTotal,
  //         };
  //       } else {
  //         addedItem.quantity -= 1;
  //         let newTotal = state.total - addedItem.price;
  //         return {
  //           ...state,
  //           total: newTotal,
  //         };
  //       }
  //     default:
  //       console.log(state, "Data call from inside function cartReducer");
  //       return state;
  //   }
};

export default cart;
