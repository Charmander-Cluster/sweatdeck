import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleWorkoutThunk } from "../../store/singleWorkout";
import { useDispatch } from "react-redux";


const EditCardioWorkout = () => {

  const redirectUri =  /localhost/.test(window.location.href) ? 'http://localhost:3000/cardioplaylist' : 'https://sweatdeck.herokuapp.com/cardioplaylist'

  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`;

    let currentWorkout = useSelector((state) => state.singleWorkout);
    let { id, docId } = useParams();

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchSingleWorkoutThunk(id, docId));
    }, [dispatch, id, docId]);

    const [workoutAdded, setWorkoutAdded] = useState(false);



     return (
      <div>Hello world</div>
      );

}

export default EditCardioWorkout;
