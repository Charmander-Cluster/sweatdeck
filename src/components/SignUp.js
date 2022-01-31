import React, { useState } from "react";
//import firebase from "firebase";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router";
// import { Redirect } from "react-router-dom";
import { authSignUp, authenticate } from "../store/auth";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  //const history = useHistory();
  const [userInput, setUserInput] = useState({
    user: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      state: "",
      birthday: "",
    },
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
    };

    await dispatch(authSignUp(user, formName));
    await dispatch(authenticate(user.email, user.password));
    history.push("/");
  };

  const handleChange = (evt) => {
    setUserInput({
      user: { ...userInput.user, [evt.target.name]: evt.target.value },
    });
  };

  return (
    <div className="text-darkest-grey">
      <h1 className="mb-2 uppercase font-bold text-lg">Sign Up Here</h1>
      <form className="flex flex-col mb-4" onSubmit={handleSubmit}>
        <div>
          {/* <label className="mb-2">First Name: </label> */}
          <input
            className="border text-gray-800"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {/* <label>Last Name: </label> */}
          <input
            className="border text-gray-800"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {/* <label>Username: </label> */}
          <input
            className="border text-gray-800"
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {/* <label>Password: </label> */}
          <input
            className="border text-gray-800"
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {/* <label>E-mail: </label> */}
          <input
            className="border text-gray-800"
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {/* <label>State (Location): </label> */}
          <input
            className="border text-gray-800"
            type="text"
            placeholder="State (location)"
            name="state"
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label>Birthday: </label> */}
          <input
            className="border text-gray-800"
            type="text"
            placeholder="Birthday"
            name="birthday"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button className="flex flex-row text-1xl mx-2 my-2 justify-center bg-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
