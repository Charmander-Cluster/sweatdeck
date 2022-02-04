const CARDIO_LOCAL_CREATE_WORKOUT = "CARDIO_LOCAL_CREATE_WORKOUT";
const CARDIO_LOCAL_EDIT_WORKOUT = "CARDIO_LOCAL_EDIT_WORKOUT"

const CARDIO_LOCAL_GET_WORKOUT = "CARDIO_LOCAL_GET_WORKOUT"

export const cardioLocalCreateWorkout = (localWorkout) => {
  return {
    type: CARDIO_LOCAL_CREATE_WORKOUT,
    localWorkout,
  };
};

export const cardioLocalEditWorkout = (localWorkout) => {
  return {
    type: CARDIO_LOCAL_EDIT_WORKOUT,
    localWorkout,
  };
};

const initialState = {};

export default function cardioLocalCreateWorkoutReducer(state = initialState, action) {
  switch (action.type) {
    case CARDIO_LOCAL_CREATE_WORKOUT:
      return action.localWorkout;
    case CARDIO_LOCAL_EDIT_WORKOUT:
      return action.localWorkout;
    default:
      return state;
  }
}
