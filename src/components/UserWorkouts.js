import React, { useEffect } from "react";
import { fetchUserWorkoutsThunk } from "../store/workoutsPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserWorkouts = (props) => {
  const workouts = useSelector((state) => state.allWorkouts);
  console.log("this is props", props.location.state);
  let cardioOrStrength = props.location.state;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserWorkoutsThunk(id, cardioOrStrength));
  }, [dispatch, id, cardioOrStrength]);

  return (
    <div className="container p-3 w-screen flex flex-col items-center justify-center py-2">
      <div className="rounded overflow-hidden pt-20">
        <div className="grid grid-cols-1">
          {workouts.map((workout) => {
            return (
              <div
                key={workout.elemId}
                className="flex flex-col px-6 mt-4 border-solid border-2"
              >
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
