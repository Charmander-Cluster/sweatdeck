const STRENGTH_LOCAL_CREATE_WORKOUT = "STRENGTH_LOCAL_CREATE_WORKOUT";
const STRENGTH_LOCAL_EDIT_WORKOUT = "STRENGTH_LOCAL_EDIT_WORKOUT"

export const strengthLocalCreateWorkout = (localWorkout) => {
  return {
    type: STRENGTH_LOCAL_CREATE_WORKOUT,
    localWorkout,
  };
};

export const strengthLocalEditWorkout = (localWorkout) => {
  return {
    type: STRENGTH_LOCAL_EDIT_WORKOUT,
    localWorkout,
  };
};

const initialState = {
};

export default function strengthLocalCreateWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case STRENGTH_LOCAL_CREATE_WORKOUT:
      return action.localWorkout;
    case STRENGTH_LOCAL_EDIT_WORKOUT:
      return action.localWorkout;
    default:
      return state;
  }
}
