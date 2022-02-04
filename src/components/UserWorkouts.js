import React, { useEffect } from "react";
import { fetchUserWorkoutsThunk } from "../store/workouts";
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import { fetchSingleWorkoutThunk } from "../store/singleWorkout";
import { Link } from "react-router-dom";

const UserWorkouts = () => {
  const workouts = useSelector((state) => state.workouts);

  // const workouts = useSelector((state) => state.workouts.workouts);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserWorkoutsThunk(id));
  }, [dispatch, id]);

  //console.log("User workouts from component", workouts);

  return (
    <div className="container p-3 w-screen flex flex-col items-center justify-center py-2">
      <div className="rounded overflow-hidden pt-20">
        <div className="grid grid-cols-1"> 
          {workouts.map((workout) => {
            return (
              <div key={workout.elemId} className="flex flex-col px-6 mt-4 border-solid border-2">
                <div className="font-bold text-3xl text-center mb-1">
                  {workout.elemData.name}
                </div>

                <Link
                  to={`/users/${id}/workouts/${workout.elemId}`}
                  className="flex flex-row text-1xl mx-2 my-2 justify-center bg-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3"
                >
                  See Workout
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserWorkouts;

//user/:id/workouts ??
// {
//   /* <Link path='./users/:id/workout' /> */
// }
// () => {
//   dispatch(fetchSingleWorkoutThunk(id, workout.elemId));
// }}
