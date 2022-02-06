import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleWorkoutThunk } from "../../store/singleWorkout";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";


const EditWorkout = () => {
    let workout = useSelector((state) => state.singleWorkout);
    let { id, docId } = useParams();

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchSingleWorkoutThunk(id, docId));
    }, [dispatch, id, docId]);
  
    const { register, handleSubmit } = useForm({
        defaultValues: workout
      });
}