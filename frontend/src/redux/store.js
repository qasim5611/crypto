import { createStore, combineReducers, applyMiddleware } from "redux";
// import { auth } from "./reducers/authReducer";
import thunk from "redux-thunk";

// import { FormReducer } from "./reducers/FormReducer";
import { Auth } from "./reducers/Auth";

let AllReducers = combineReducers({
  // auth,
  // FormReducer,
  Auth,
});

let store = createStore(AllReducers, applyMiddleware(thunk));

export default store;
