import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editUserThunk } from "../../store/users";
import { sendPasswordReset } from "../../store";
import maleImage from "../../assets/male-useravatar.png";
import femaleImage from "../../assets/female-useravatar.png";
import defaultImage from "../../assets/default-useravatar.png";
import { Formik, Form, Field } from "formik";

const EditUser = () => {
  const { user } = useSelector((state) => state.users);

  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [btnState, setBtnState] = useState(false);

  const handleModal = (event) => {
    event.preventDefault();
    setBtnState((prev) => !prev);
  };

  const passwordReset = (event) => 
  {event.preventDefault();
    sendPasswordReset(user.email);
    setBtnState((prev) => !prev);
  }

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Formik
        initialValues={{
          username: user.username,
          state: user.state,
          favoriteWorkoutType: user.favoriteWorkoutType,
          goal: user.goal,
        }}
        validate={(values) => {
          const errors = {};

          if (!values.username) {
            errors.username = "Required";
          }

          return errors;
        }}
        onSubmit={(values) => {
          dispatch(editUserThunk(id, values));
          history.push(`/users/${id}`);
        }}
      >
        {({ values, handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <div className="pt-20 overflow-hidden rounded">
              <div className="flex justify-center w-full pt-4 -mt-20">
                <div className="w-32 h-32">
                  {user && user.gender === "Male" ? (
                    <div className="w-32 h-32">
                      <img
                        src={maleImage}
                        alt="User Profile"
                        className="object-cover w-full h-full rounded-full shadow-md shadow-black"
                      />
                    </div>
                  ) : user.gender === "Female" ? (
                    <div className="w-32 h-32">
                      <img
                        src={femaleImage}
                        alt="User Profile"
                        className="object-cover w-full h-full rounded-full shadow-md shadow-black"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32">
                      <img
                        src={defaultImage}
                        alt="User Profile"
                        className="object-cover w-full h-full rounded-full shadow-md shadow-black"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <h1 className="mb-1 text-3xl font-bold text-center">
                  {user.username}
                </h1>
                <div className="pt-4">
                  <h1 className="font-extrabold">Username</h1>
                  <label htmlFor="username"></label>
                  <Field
                    type="text"
                    name="username"
                    className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                  {errors.username && touched.username && errors.username}
                </div>
                <div className="relative w-full lg:hidden md:mt-4">
                  <h1 className="pt-2 font-extrabold">State (Location)</h1>
                  <div className="absolute inset-0 z-0 w-6 h-6 m-auto mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-4 icon icon-tabler icon-tabler-selector"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#a0aec0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 9 12 5 16 9" />
                      <polyline points="16 15 12 19 8 15" />
                    </svg>
                  </div>

                  <Field
                    className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                    name="state"
                    as="select"
                  >
                    <option value={values.state} disabled>
                      {values.state}
                    </option>

                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AZ">AZ</option>
                    <option value="AR">AR</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="DC">D.C.</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="IA">IA</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="ME">ME</option>
                    <option value="MD">MD</option>
                    <option value="MA">MA</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MS">MS</option>
                    <option value="MO">MO</option>
                    <option value="MT">MT</option>
                    <option value="NE">NE</option>
                    <option value="NV">NV</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NY">NY</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WV">WV</option>
                    <option value="WI">WI</option>
                    <option value="WY">WY</option>
                  </Field>
                </div>

                <div className="relative w-full lg:hidden md:mt-4">
                  <h1 className="pt-2 font-extrabold">Favorite Workout Type</h1>
                  <div className="absolute inset-0 z-0 w-6 h-6 m-auto mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-4 icon icon-tabler icon-tabler-selector"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#a0aec0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 9 12 5 16 9" />
                      <polyline points="16 15 12 19 8 15" />
                    </svg>
                  </div>
                  <Field
                    className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Favorite Workout Type"
                    name="favoriteWorkoutType"
                    as="select"
                  >
                    <option value={values.favoriteWorkoutType} disabled>
                      {values.favoriteWorkoutType}
                    </option>
                    <option value="Cardio">Cardio</option>
                    <option value="Strength">Strength</option>
                  </Field>
                </div>
                <div className="relative w-full lg:hidden md:mt-4">
                  <h1 className="pt-2 font-extrabold">Goal</h1>
                  <div className="absolute inset-0 z-0 w-6 h-6 m-auto mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-4 icon icon-tabler icon-tabler-selector"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#a0aec0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 9 12 5 16 9" />
                      <polyline points="16 15 12 19 8 15" />
                    </svg>
                  </div>
                  <Field
                    className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Goal"
                    name="goal"
                    as="select"
                  >
                    <option value={values.goal} disabled>
                      {values.goal}
                    </option>
                    <option value="Just Getting Started">
                      Just Getting Started
                    </option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Competition">Competition</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Hobby">Hobby</option>
                    <option value="Other">Other</option>
                  </Field>
                </div>
                <button
                  type="submit"
                  className="flex flex-row justify-center px-8 py-3 my-4 text-white transition duration-150 ease-in-out bg-teal-700 rounded shadow-md text-1xl shadow-black hover:bg-teal-600"
                >
                  <svg
                    className="w-6 h-6 mr-2 pb-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                    ></path>
                  </svg>
                  Save Changes
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <button
        className="ml-1 underline"
        onClick={passwordReset}
      >
        Password Reset
      </button>

      {btnState ? (
                    // <div>{alert("Workout logged!")}</div>
                    <div
                      className="fixed z-10 inset-0 overflow-y-auto"
                      aria-labelledby="modal-title"
                      role="dialog"
                      aria-modal="true"
                    >
                      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                          aria-hidden="true"
                        ></div>

                        <span
                          className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>

                        <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-green-500 sm:mx-0 sm:h-10 sm:w-10"></div>
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3
                                  className="text-lg leading-6 font-medium text-gray-900"
                                  id="modal-title"
                                >
                                  Password reset email sent!
                                </h3>
  
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                              type="button"
                              className="modal-close mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={handleModal}
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
    </div>
  );
};

export default EditUser;
