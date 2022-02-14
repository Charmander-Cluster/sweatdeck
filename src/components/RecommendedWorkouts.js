import React, { useEffect } from "react";
import { fetchRecommendedWorkoutsThunk } from "../store/recommendedWorkouts";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const RecommendedWorkouts = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const authUser = useSelector((state) => state.auth);
  const group = authUser.group;
  const cardioOrStrength = props.cardioOrStrength;

  const recommendedWorkouts = useSelector((state) => state.recommendedWorkouts);

  useEffect(() => {
    dispatch(fetchRecommendedWorkoutsThunk(id, group, cardioOrStrength));
  }, [dispatch, id, group, cardioOrStrength]);

  return (
    <div className="container flex flex-col items-center justify-center w-screen p-3 py-2">
      <div className="flex items-center justify-center">
        <div className="pt-5 overflow-hidden rounded">
          <div className="grid grid-cols-1">
            {recommendedWorkouts.map((workout) => {
              return (
                <div
                  key={workout.elemId}
                  className="flex flex-row justify-center w-full -mt-10 text-1xl"
                >
                  <div className="m-3 my-5 overflow-x-auto border border-teal-500 rounded-md bg-neutral-700 mb-14">
                    <div className="justify-center max-w-4xl p-3 ">
                      <div className="flex flex-wrap -mx-3">
                        <div className="container flex justify-center w-screen text-center">
                          <div className="block m-3 text-2xl font-bold">
                            <div>
                              <div className="m-1 text-2xl font-bold uppercase">
                                {workout.elemData.name}
                              </div>

                              <Link
                                to={`/users/${id}/recommendedWorkouts/${workout.elemId}`}
                                className="p-3 text-sm text-center text-white bg-teal-600 rounded-md"
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
    </div>
  );
};

export default RecommendedWorkouts;
