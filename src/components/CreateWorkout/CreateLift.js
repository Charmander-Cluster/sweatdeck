import React, { useState, useEffect } from "react";
import LiftDetails from "./LiftDetails"

const CreateLift = () => {
  return(
    <div className="container p-8">
      <div className="flex justify-center">
      <img className="h-20" alt="weight-icon" src="https://icons-for-free.com/iconfiles/png/512/fitness+gym+gymnasium+icon-1320168052118785594.png"></img>
      </div>
      {/* <h1>Details</h1> */}
      <div className="border border-teal-500 bg-neutral-700 rounded-md my-5">

          <LiftDetails />

      </div>

      <div className="flex justify-center">
      <button>Save Workout</button>
      </div>

    </div>
  )
}

export default CreateLift

