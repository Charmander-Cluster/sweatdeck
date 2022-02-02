import React, { useEffect } from "react";
import { fetchUserWorkoutsThunk } from "../store/workouts";
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";

const UserWorkouts = () => {
  const { workouts } = useSelector((state) => {
    return {
      workouts: state.workouts,
    };
  });

  // const workouts = useSelector((state) => state.workouts.workouts);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserWorkoutsThunk(id));
  }, [dispatch, id]);

  console.log("User workouts from component", workouts);

  return (
    <div>
      <div>
        {workouts.map((workout) => {
          return <div>{workout.elemData}</div>;
        })}
      </div>
    </div>
  );
};

export default UserWorkouts;

//user/:id/workouts ??
