import React, { useEffect } from "react";
import { fetchUserWorkoutsThunk } from "../../store/workoutsPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserWorkouts = (props) => {
  const workouts = useSelector((state) => state.allWorkouts);
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
              <div className="flex flex-row justify-center w-full -mt-10 text-1xl">
                <div className="m-3 my-5 overflow-x-auto border border-teal-500 rounded-md bg-neutral-700 mb-14">
                  <div className="justify-center max-w-4xl p-3 ">
                    <div className="flex flex-wrap -mx-3">
                      <div className="container flex justify-center w-screen text-center">
                        <div
                          key={workout.elemId}
                          className="block m-3 text-2xl font-bold"
                        >
                          <div>
                            <div className = "m-1 text-2xl font-bold uppercase">{workout.elemData.name}</div>

                            <Link
                              to={`/users/${id}/workouts/${workout.elemId}`}
                              className="p-3 text-sm text-center text-white bg-teal-500 rounded-md"
                            >
                              See Workout
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserWorkouts;
