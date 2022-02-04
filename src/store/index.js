import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFirestore, reduxFirestore } from "redux-firestore";
import db from "../firebase";
import allWorkouts from "./workoutsPage";
import users from "./users";
import singleWorkout from "./singleWorkout";

const reducer = combineReducers({
  allWorkouts,
  users,
  singleWorkout,
});
const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ getFirestore }),
    createLogger({ collapsed: true })
  ),
  reduxFirestore(db)
);
const store = createStore(reducer, middleware);

export default store;
