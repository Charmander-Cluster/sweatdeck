import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleWorkoutThunk } from "../../../store/singleWorkout";
import { editWorkoutThunk } from "../../../store/singleWorkout";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import EditStrengthDetails from "./EditStrengthDetails";

const EditStrengthWorkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  let currentWorkout = useSelector((state) => state.singleWorkout);
  let { id, docId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleWorkoutThunk(id, docId));
  }, [dispatch, id, docId]);

  // const localWorkout = useSelector(state => state.localWorkout)

  const [workout, setWorkout] = useState(currentWorkout);

  const handleChange = (event) => {
    setWorkout({
      ...currentWorkout,
      [event.target.name]: event.target.value,
    });
    console.log("+++++CHECKING WORKOUT:", workout);
  };

  const handleUpdate = (exercises) => {
    workout.exercises = exercises;
  };

  const handleDelete = (num) => {
    console.log("handleDelete num!!!!!!!!!; ", num);
    setWorkout(
      { ...workout },
      workout.exercises.splice(num,1)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editWorkoutThunk(id, docId, workout));
    history.push(`/users/${id}/workouts/${docId}`);
  };

  const handleAdd = (event) => {
    setWorkout(
      { ...workout },
      workout.exercises.push({
        bodyPart: "select",
        type: "select",
        weight: "",
        units: "select",
        reps: "",
        sets: "",
      })
    );
  };

  //console.log(currentWorkout.exercises);

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex items-center justify-center">
        <h1 className="my-10 text-3xl text-teal-500 align-center">
          Edit Strength Workout
        </h1>
      </div>

      <div className="flex flex-row justify-center w-full mb-3 -mt-4 text-1xl">
        <div className="m-3 my-5 overflow-x-auto border border-teal-500 rounded-md bg-neutral-700 mb-14">
          <form className="justify-center max-w-4xl p-3 ">
            <div className="flex flex-wrap -mx-3 ">
              <div className="container flex justify-center">
                <div>
                  <div className="container w-screen p-3">
                    <div className="flex justify-center">
                      <img
                        className="h-16 mb-2 max-h-16"
                        alt="weight-icon"
                        src="https://allenparkdowntown.org/wp-content/uploads/ES-safe-sidewalk.png"
                      ></img>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex-col justify-center align-center">
                        <div className="flex align-center">
                          <div className="flex-col">
                            <label
                              htmlFor="name"
                              className="block mt-5 text-sm font-medium"
                            >
                              Name Your Workout
                            </label>
                            <input
                              className="w-72  bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              required
                              name="name"
                              onChange={handleChange}
                              defaultValue={currentWorkout.name}
                            />

                            <div className="my-2">
                              {[...Array(workout.exercises.length)].map(
                                (_, i) => (
                                  <EditStrengthDetails
                                    handleUpdate={handleUpdate}
                                    handleDelete={handleDelete}
                                    workout={workout}
                                    key={i}
                                    number={i}
                                  />
                                )
                              )}
                            </div>

                            <div className="flex justify-end">
                              <input
                                type="image"
                                alt="add-workout"
                                src="https://cdn-icons-png.flaticon.com/512/189/189689.png"
                                className="h-8 mr-3 bg-teal-500 rounded-2xl"
                                onClick={handleAdd}
                              />
                            </div>

                            <div className="grid mt-5 place-items-center">
                              <button
                                className="flex p-3 mb-3 text-lg text-white bg-teal-500 rounded-md"
                                onClick={handleSubmit}
                                // href={AUTH_URL}
                              >
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStrengthWorkout;
