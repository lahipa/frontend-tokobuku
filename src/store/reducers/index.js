import { combineReducers } from "redux";

import categoryReducer from "./category";
import bookReducer from "./book";
import userReducer from "./user";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  categoryReducer,
  bookReducer,
  userReducer,
  cartReducer,
});

export default rootReducer;
