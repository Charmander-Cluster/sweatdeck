import React, { useState } from "react";
//import firebase from "firebase";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router";
// import { Redirect } from "react-router-dom";
import { authSignUp, authenticate } from "../store/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  //const history = useHistory();
  const [userEmails] = useState({});
  const [userInput, setUserInput] = useState({
    user: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      state: "",
      birthday: "",
      gender: "",
      favoriteWorkoutType: "",
      frequency: "",
      goal: "",
    },
    errors: {},
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const formName = evt.target.name;
    const user = {
      firstName: evt.target.firstName.value,
      lastName: evt.target.lastName.value,
      username: evt.target.username.value,
      password: evt.target.password.value,
      email: evt.target.email.value,
      state: evt.target.state.value,
      birthday: evt.target.birthday.value,
      gender: evt.target.gender.value,
      favoriteWorkoutType: evt.target.favoriteWorkoutType.value,
      frequency: evt.target.frequency.value,
      goal: evt.target.goal.value,
    };

    await dispatch(authSignUp(user, formName));
    await dispatch(authenticate(user.email, user.password));
    history.push("/");
  };

  const handleChange = (evt) => {
    let errors = { password: "", email: "" };
    if (userInput.user.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
    if (userInput.user.email in userEmails) {
      errors.email = "E-mail has already been used.";
    }
    setUserInput({
      user: { ...userInput.user, [evt.target.name]: evt.target.value },
      errors,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h1 className="mb-2 uppercase font-bold text-lg">Sign Up Here</h1>
      <h4 className="mb-2 font-bold text-sm">*Required fields</h4>
      <form className="flex flex-col mb-4" onSubmit={handleSubmit}>

        <div>
          <h1 className="font-extrabold text-sm">Username:*</h1>
          {/* <label>Username: </label> */}
          <input
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <h1 className="font-extrabold text-sm">Password:*</h1>
          {/* <label>Password: </label> */}
          <input
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <h1 className="font-extrabold text-sm">E-mail:*</h1>
          {/* <label>E-mail: </label> */}
          <input
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <h1 className="font-extrabold text-sm">State (Location):*</h1>
          {/* <label>State (Location): </label> */}
          <input
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="State (location)"
            name="state"
            onChange={handleChange}
          />
        </div>
        <div>
          <h1 className="font-extrabold text-sm">Birthday:*</h1>
          {/* <label>Birthday: </label> */}
          <input
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="Birthday"
            name="birthday"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <h1 className="font-extrabold text-sm">First Name:</h1>
          <input
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            //required
          />
        </div>
        <div>
          <h1 className="font-extrabold text-sm">Last Name:</h1>
          <input
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            //required
          />
        </div>
        <div>
          <h1 className="font-extrabold text-sm">Gender:</h1>
          {/* <label>Birthday: </label> */}
          <select
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            placeholder="Gender"
            name="gender"
            onChange={handleChange}
            default=""
          >
            <option value = ""></option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Female Identifying">Female Identifying</option>
            <option value="Male Identifying">Male Identifying</option>
            <option value="Non-Conforming">Non-Conforming</option>
          </select>
        </div>
        <div>
          <h1 className="font-extrabold text-sm">Favorite Workout Type:</h1>
          {/* <label>Birthday: </label> */}
          <select
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            placeholder="Favorite Workout Type"
            name="favoriteWorkoutType"
            onChange={handleChange}
            default=""
          >
            <option value = ""></option>
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
          </select>
        </div>
        <div>
          <h1 className="font-extrabold text-sm">Frequency (# of days worked out/week):</h1>
          {/* <label>Birthday: </label> */}
          <select
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            placeholder="Frequency"
            name="frequency"
            onChange={handleChange}
            default=""
          >
            <option value = ""></option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div>
          <h1 className="font-extrabold text-sm">Goal:</h1>
          {/* <label>Birthday: </label> */}
          <select
            className="appearance-none relative block pl-3 pr-20 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            placeholder="Goal"
            name="goal"
            onChange={handleChange}
            default=""
          >
            <option value = ""></option>
            <option value="Get started">Just getting started</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Competition">Competition</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Hobby">Hobby</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <button className="flex flex-row text-1xl mx-2 my-2 justify-center bg-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3">
            Sign Up
          </button>
        </div>
      </form>
      <div>
        <h2>Already have an account? <Link to ='/signin'>Sign in</Link></h2> 
      </div>
      {/* <div>
        {userInput.errors.email !== "" && (
          <span className="error">{userInput.errors.email}</span>
        )}
        {userInput.errors.password !== "" && (
          <span className="error">{userInput.errors.password}</span>
        )}
        {userInput.errors !== "" && <span className="error"></span>}
      </div> */}
    </div>
  );
};

export default SignUp;
