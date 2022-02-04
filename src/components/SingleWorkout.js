import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleWorkoutThunk } from "../store/singleWorkout";
import { useDispatch } from "react-redux";
const SingleWorkout = () => {
  let workout = useSelector((state) => state.singleWorkout);
  console.log("this is workout from SingleWorkout", workout);

  let { id, docId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleWorkoutThunk(id, docId));
  }, [dispatch, id, docId]);

  //make ternary statement in return
  return (
    <div>
      <h1>{workout.name}</h1>
      <h1>{workout.category}</h1>
      <h1>{workout.date}</h1>
      {/* <div>{workout.exercises}</div> */}
    </div>
  );
};
//return(div name = elem.data.name
//weight = elem.data.weight

//div)

export default SingleWorkout;
