import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFirestore, reduxFirestore } from "redux-firestore";
import db from "../firebase";
import workouts from "./workouts";
import users from "./users";
import singleWorkout from "./singleWorkout";
import auth from "./auth";
import localCreateWorkoutReducer from "./localCreateWorkout";
import createDBWorkoutReducer from "./createDBWorkout";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const reducer = combineReducers({
  auth,
  workouts,
  users,
  singleWorkout,
  localWorkout: localCreateWorkoutReducer,
  DBWorkout: createDBWorkoutReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ getFirestore }),
    createLogger({ collapsed: true })
  ),
  reduxFirestore(db)
);
//const store = createStore(reducer, middleware);

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, middleware)

let persistor = persistStore(store)

export default store;
export * from "./auth";
export * from "./localCreateWorkout";
export * from "./createDBWorkout"

