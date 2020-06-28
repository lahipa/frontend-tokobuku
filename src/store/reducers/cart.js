import * as actionTypes from "../actions/cart/actionTypes";

const initialState = {
  addedItems: [],
  total: 0,
  /* items: [
    {
      id: "5ef4b46b9a729803e8b2b5f5",
      title: "Catherine House",
      authorName: "Elisabeth Thomas",
      synopsis:
        "A seductive, gothic-infused tale of literary suspense — the debut of a spectacular new voice — about a dangerously curious young undergraduate whose rebelliousness leads her to discover a shocking secret involving an exclusive circle of students . . . and the dark truth beneath her school’s promise of prestige.",
      bookStatus: 1,
      price: 120000,
    },
    {
      id: "5ef4c1ab9a729803e8b2b5f9",
      title: "On the Horizon",
      authorName: "Eros Chandra",
      synopsis:
        "From Lois Lowry comes an account of the lives lost in two of WWII’s most infamous events: Pearl Harbor and Hiroshima. With black-and-white illustrations by Kenard Pak.\n\nLois Lowry looks back at history through a personal lens as she draws from her own memories as a child in Hawaii and Japan, as well as from historical research, in this work in verse for young readers.\n\nOn the Horizon tells the story of people whose lives were lost or forever altered by the twin tragedies of Pearl Harbor and Hiroshima. Composed of poems about individual sailors who lost their lives on the Arizona and about the citizens of Hiroshima who experienced unfathomable horror.",
      price: 135000,
      bookStatus: 0,
    },
  ],
  addedItems: [],
  total: 0, */
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_CART:
      return {
        ...state,
        addedItems: action.payload,
      };
    case actionTypes.UPDATE_ON_CART:
      return {
        ...state,
      };
    case actionTypes.DELETE_FROM_CART:
      return {
        ...state,
      };
    default:
      console.log(initialState, "Call data from cartReducer");
      return initialState;
  }
  /* let addedItem = state.items.find((item) => item.id === action.id);

  switch (action.type) {
    case actionTypes.ADD_TO_CART: //INSIDE HOME COMPONENT
      let existed_item = state.addedItems.find((item) => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }
    case actionTypes.REMOVE_ITEM:
      let itemToRemove = state.addedItems.find((item) => action.id === item.id);
      let new_items = state.addedItems.filter((item) => action.id !== item.id);

      //calculating the total
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    case actionTypes.ADD_QUANTITY: //INSIDE CART COMPONENT
      addedItem.quantity += 1;
      let newTotalAddQty = state.total + addedItem.price;
      return {
        ...state,
        total: newTotalAddQty,
      };
    case actionTypes.SUB_QUANTITY:
      //if the qt == 0 then it should be removed
      if (addedItem.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item.id !== action.id
        );
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        addedItem.quantity -= 1;
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          total: newTotal,
        };
      }
    default:
      console.log(state, "Data call from inside function cartReducer");
      return state;
  }

  
  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }
 
  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  } */
};

export default cart;
