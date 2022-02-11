import React, { useEffect } from "react";
import { fetchRecommendedWorkoutsThunk } from "../store/recommendedWorkouts";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";


const RecommendedWorkouts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  //const data = useSelector((state) => state.getData);

  useEffect(() => {
    dispatch( fetchRecommendedWorkoutsThunk(id));
  }, [dispatch, id]);

  //console.log("from popup:" , reco([80, 33.62505])); 
  

  //console.log(reco([1930, 27.994402, -81.760254]))

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
};

export default RecommendedWorkouts;