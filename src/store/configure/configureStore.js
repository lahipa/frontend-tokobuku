import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import monitorReducer from "../../enhancers/monitorReducer";
import logger from "../../middleware/logger";
import rootReducer from "../reducers";

const configureStore = (preloadedState) => {
  const middlewares = [logger, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
};

export default configureStore;
