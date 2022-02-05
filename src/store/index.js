import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFirestore, reduxFirestore } from "redux-firestore";
import db from "../firebase";
import allWorkouts from "./workoutsPage";
import users from "./users";
import auth from "./auth";
import strengthLocalCreateWorkoutReducer from "./strengthLocalCreateWorkout";
import cardioLocalCreateWorkoutReducer from "./cardioLocalCreateWorkout";
import createDBWorkoutReducer from "./createDBWorkout";
import workouts from "./workouts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import singleWorkoutReducer from "./singleWorkout";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  singleWorkout: singleWorkoutReducer,
  allWorkouts,
  auth,
  workouts,
  users,
  cardioLocalWorkout: cardioLocalCreateWorkoutReducer,
  strengthLocalWorkout: strengthLocalCreateWorkoutReducer,
  DBWorkout: createDBWorkoutReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ getFirestore }),
    createLogger({ collapsed: true })
  ),
  reduxFirestore(db)
);
//const store = createStore(reducer, middleware);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, middleware);

let persistor = persistStore(store);

export default store;
export * from "./auth";
export * from "./cardioLocalCreateWorkout";
export * from "./strengthLocalCreateWorkout";
export * from "./createDBWorkout";
