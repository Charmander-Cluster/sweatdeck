import React, { useEffect } from "react";
import { fetchUserWorkoutsThunk } from "../../store/workoutsPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UserWorkouts = (props) => {
  const workouts = useSelector((state) => state.allWorkouts);
  let cardioOrStrength = props.location.state;
  const upperCaseType =
    cardioOrStrength[0].toUpperCase() + cardioOrStrength.slice(1);

  const dispatch = useDispatch();
  const { id } = useParams();

  const redirectUri = /localhost/.test(window.location.href)
    ? `http://localhost:3000/users/${id}/workouts/`
    : `https://sweatdeck.herokuapp.com/users/${id}/workouts/`;

  const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
    "user-read-playback-state",
    "user-modify-playback-state",
    "playlist-read-private",
  ];

  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=1a13f745b9ab49caa6559702a79211e6&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}`;

  useEffect(() => {
    dispatch(fetchUserWorkoutsThunk(id, cardioOrStrength));
  }, [dispatch, id, cardioOrStrength]);

  const handleSubmitWithSpotify = (event) => {
    event.preventDefault();

    window.location.href = AUTH_URL;
  };

  return !workouts.length ? (
    <div className="container flex items-center justify-center mt-56">
      <div className="flex-col justify-center">
        <div className="mb-16 text-3xl text-center">
          {" "}
          You have no {cardioOrStrength} workouts!{" "}
        </div>
        <div className="flex justify-center">
          <Link to="/createworkout">
            <button
              type="button"
              className="justify-center p-4 text-3xl border border-white rounded-md w-58 bg-gradient-to-r from-teal-500 to-purple-800"
            >
              {" "}
              Create a Workout{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="container flex flex-col w-screen py-2">
      <div className="relative z-10 pt-2 pb-10">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center">
          <div className="flex flex-col items-start lg:flex-row lg:items-center">
            <div className="my-6 ml-0 lg:ml-20 lg:my-0">
              <h4 className="text-2xl font-bold leading-tight text-white">
                Your {upperCaseType} Workouts
              </h4>
              <div className="h-1 mt-4 rounded-full bg-gradient-to-l from-teal-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 overflow-hidden rounded">
        <div className="grid grid-cols-1">
          {workouts.map((workout) => {
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
                              to={`/users/${id}/workouts/${workout.elemId}`}
                              // onClick={handleSubmitWithSpotify}
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
