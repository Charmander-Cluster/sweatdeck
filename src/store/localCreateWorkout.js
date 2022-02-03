const LOCAL_CREATE_WORKOUT = "LOCAL_CREATE_WORKOUT";
const LOCAL_EDIT_WORKOUT = "LOCAL_EDIT_WORKOUT"

export const localCreateWorkout = (localWorkout) => {
  return {
    type: LOCAL_CREATE_WORKOUT,
    localWorkout,
  };
};

export const localEditWorkout = (localWorkout) => {
  return {
    type: LOCAL_EDIT_WORKOUT,
    localWorkout,
  };
};

const initialState = {};

export default function localCreateWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOCAL_CREATE_WORKOUT:
      return action.localWorkout;
    case LOCAL_EDIT_WORKOUT:
      return action.localWorkout;
    default:
      return state;
  }
}
