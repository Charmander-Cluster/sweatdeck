import React, { useState, useEffect } from "react";
import StrengthDetails from "./StrengthDetails";

const CreateStrength = (props) => {

  const workout = props.strengthWorkout
  const handleChange = props.handleStrengthChange

  console.log(workout)

  return (
    <div className="container p-4">
      <div className="flex justify-center">
        <img
          className="max-h-20 h-20 mb-5"
          alt="weight-icon"
          src="https://icons-for-free.com/iconfiles/png/512/fitness+gym+gymnasium+icon-1320168052118785594.png"
        ></img>
      </div>
      {/* <h1>Details</h1> */}
      {/* <div className="border border-teal-500 bg-neutral-700 rounded-md my-5 overflow-x-auto"> */}


      <StrengthDetails />
    </div>
  );
};

export default CreateStrength;
