import { createStore, applyMiddleware, compose } from "redux";

// middlewares
//import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";

// Import custom components
import rootReducer from "../reducers";

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    console.log(JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(
  rootReducer,
  persistedState,
  compose(
    //applyMiddleware(thunkMiddleware),
    applyMiddleware(thunk),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : function(f) {
          return f;
        }
  )
);

export default store;
