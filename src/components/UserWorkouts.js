import React, { useEffect } from "react";
import { fetchUserWorkoutsThunk } from "../store/workoutsPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserWorkouts = (props) => {
  const workouts = useSelector((state) => state.allWorkouts);
  console.log("this is props", props.location.state);
  let cardioOrStrength = props.location.state;

  console.log(props.location.state);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserWorkoutsThunk(id, cardioOrStrength));
  }, [dispatch, id, cardioOrStrength]);

  return (
    <div className="container flex flex-col items-center justify-center w-screen p-3 py-2">
      <div className="pt-20 overflow-hidden rounded">
        <div className="grid grid-cols-1">
          {workouts.map((workout) => {
            return (
              <div
                key={workout.elemId}
                className="flex flex-col px-6 mt-4 border-2 border-solid"
              >
                <div className="mb-1 text-3xl font-bold text-center">
                  {workout.elemData.name}
                </div>

                <Link
                  to={`/users/${id}/workouts/${workout.elemId}`}
                  className="flex flex-row justify-center px-8 py-3 mx-2 my-2 text-white transition duration-150 ease-in-out bg-teal-700 rounded text-1xl hover:bg-teal-600"
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
