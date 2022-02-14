import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../store/auth";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import DatePickerField from "./DatePickerField";

const SignUp = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const authUser = useSelector((state) => state.auth);

  const [btnState, setBtnState] = useState(false);

  const stepClick = () => {
    setStep(2);
  };

  const errorClick = () => {
    setBtnState((prev) => !prev);
  };

  const handleModal = (event) => {
    event.preventDefault();
    setBtnState((prev) => !prev);
  };

  const [visible, setVisible] = useState("password");

  const onClickVisible = () => {
    if (visible === "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  };

  useEffect(() => {
    if (authUser.uid) {
      history.push("/");
    }
  }, [authUser, history]);

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
          birthday: "",
          state: "",
          firstName: "",
          lastName: "",
          gender: "Prefer not to say",
          favoriteWorkoutType: "Cardio",
          frequency: "0",
          goal: "Just getting started",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          const passwordRegex = /(?=.*[0-9])/;
          if (!values.password) {
            errors.password = "Password required";
          } else if (values.password.length < 6) {
            errors.password = "Password must be 6 characters long.";
          } else if (!passwordRegex.test(values.password)) {
            errors.password = "Invalid password. Must contain one number.";
          }

          if (!values.username) {
            errors.username = "Username required";
          }

          if (!values.birthday) {
            errors.birthday = "Birthday required";
          }

          if (!values.state) {
            errors.state = "State required";
          }

          return errors;
        }}
        onSubmit={(values) => {
          const selectedDate = new Date(values.birthday); // pass in date param here
          const formattedDate = `${
            selectedDate.getMonth() + 1
          }/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
          values.birthday = formattedDate;

          dispatch(authSignUp(values));
        }}
      >
        {({ values, errors, touched, handleSubmit }) => (
          <div>
            {step === 1 ? (
              <Form>
                <div className="w-full p-6 md:flex md:flex-col md:justify-center md:items-center md:min-h-screen">
                  <div className="items-center pb-6 border-b border-purple-600 md:flex">
                    <div className="flex items-center mt-1 md:mt-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-teal-600 border-2 border-white rounded shadow-md shadow-black">
                        <p className="text-base font-medium leading-none text-white">
                          01
                        </p>
                      </div>
                      <p className="ml-3 text-base font-medium leading-4 text-white">
                        Security
                      </p>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 md:ml-12">
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded shadow-md shadow-black">
                        <p className="text-base font-medium leading-none text-teal-600">
                          02
                        </p>
                      </div>
                      <p className="ml-3 text-base font-medium leading-4 text-white">
                        Optional info
                      </p>
                    </div>
                  </div>

                  <div className="w-full p-8 mt-10 bg-teal-600 rounded-md shadow-md shadow-black md:w-5/12">
                    <div className="items-center">
                      <h1 className="mb-4 text-3xl font-bold text-white focus:outline-none">
                        Security
                      </h1>
                      <div className="flex flex-col">
                        <h1 className="pt-2 font-extrabold">Username</h1>
                        <Field
                          type="text"
                          placeholder="Username"
                          name="username"
                          className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded shadow-md shadow-black"
                        />
                        {errors.username && touched.username && errors.username}
                      </div>
                      <div className="flex flex-col mt-2">
                        <h1 className="pt-2 font-extrabold">Password</h1>
                        <div className="relative flex items-center justify-center">
                          <Field
                            type={visible}
                            placeholder="Password"
                            name="password"
                            className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded shadow-md shadow-black"
                          />
                          <div className="absolute right-0 mr-3 cursor-pointer stroke-fuchsia-600 hover:stroke-purple-700">
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={onClickVisible}
                            >
                              <path
                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                fill="#71717A"
                              />
                            </svg>
                          </div>
                        </div>
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                    <div className="items-center mt-2">
                      <div className="flex flex-col">
                        <h1 className="pt-2 font-extrabold">Email Address</h1>
                        <Field
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded shadow-md shadow-black"
                        />
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                    <div className="items-center mt-2">
                      <div className="flex flex-col">
                        <h1 className="pt-2 font-extrabold">Date of birth</h1>
                        <Field
                          name="birthday"
                          type="date"
                          className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded shadow-md shadow-black"
                        />
                        {errors.birthday && touched.birthday && errors.birthday}
                      </div>
                      <div className="relative flex flex-col mt-2">
                        <h1 className="pt-2 font-extrabold">
                          State (Location)
                        </h1>

                        <Field
                          className="w-full shadow-md shadow-black p-3.5 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded appearance-none form-select"
                          name="state"
                          as="select"
                        >
                          <option value="--">--</option>
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
                    </div>{" "}
                    {values.username === "" ||
                    values.email === "" ||
                    values.password === "" ||
                    values.birthday === "" ||
                    values.state === "" ? (
                      <button
                        type="button"
                        onClick={errorClick}
                        className="flex items-center justify-center py-4 mt-10 bg-purple-600 rounded-md shadow-md cursor-pointer hover:bg-purple-700 shadow-black px-7 focus:outline-none md:mt-10 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                      >
                        <span className="text-sm font-medium text-center text-white capitalize">
                          Next Step
                        </span>
                        <svg
                          className="mt-1 ml-3"
                          width={12}
                          height={8}
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z"
                            fill="#242731"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={stepClick}
                        className="flex items-center justify-center py-4 mt-10 bg-purple-600 rounded-md shadow-md cursor-pointer md:mt-10 hover:bg-purple-700 shadow-black px-7 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                      >
                        <span className="text-sm font-medium text-center text-white capitalize">
                          Next Step
                        </span>
                        <svg
                          className="mt-1 ml-3"
                          width={12}
                          height={8}
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z"
                            fill="#242731"
                          />
                        </svg>
                      </button>
                    )}
                    {btnState ? (
                      // <div>{alert("Workout logged!")}</div>
                      <div
                        className="fixed inset-0 z-10 overflow-y-auto"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                      >
                        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                          <div
                            className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                            aria-hidden="true"
                          ></div>

                          <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                          >
                            &#8203;
                          </span>

                          <div className="inline-block overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">
                                <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 mx-auto bg-red-500 rounded-full sm:mx-0 sm:h-10 sm:w-10"></div>
                                {values.username === "" &&
                                values.email === "" &&
                                values.password === "" &&
                                values.birthday === "" &&
                                values.state === "" ? (
                                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                      className="text-lg font-medium leading-6 text-gray-900"
                                      id="modal-title"
                                    >
                                      Please fill out the fields!
                                    </h3>
                                  </div>
                                ) : (
                                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                      className="text-lg font-medium leading-6 text-gray-900"
                                      id="modal-title"
                                    >
                                      {errors.username}
                                    </h3>
                                    <h3
                                      className="text-lg font-medium leading-6 text-gray-900"
                                      id="modal-title"
                                    >
                                      {errors.password}
                                    </h3>
                                    <h3
                                      className="text-lg font-medium leading-6 text-gray-900"
                                      id="modal-title"
                                    >
                                      {errors.email}
                                    </h3>
                                    <h3
                                      className="text-lg font-medium leading-6 text-gray-900"
                                      id="modal-title"
                                    >
                                      {errors.birthday}
                                    </h3>
                                    <h3
                                      className="text-lg font-medium leading-6 text-gray-900"
                                      id="modal-title"
                                    >
                                      {errors.state}
                                    </h3>

                                    <h3
                                      className="text-lg font-medium leading-6 text-gray-900"
                                      id="modal-title"
                                    >
                                      {errors.state}
                                    </h3>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                              <button
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm modal-close hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
                </div>
              </Form>
            ) : (
              <Form onSubmit={handleSubmit}>
                <div className="w-full p-6 md:flex md:flex-col md:justify-center md:items-center md:min-h-screen">
                  <div className="items-center pb-6 border-b border-purple-600 md:flex">
                    <div className="flex items-center mt-1 md:mt-0">
                      <div className="flex items-center justify-center w-8 h-8 bg-white border-2 border-white rounded shadow-md shadow-black">
                        <p className="text-base font-medium leading-none text-teal-600">
                          01
                        </p>
                      </div>
                      <p className="ml-3 text-base font-medium leading-4 text-white">
                        Security
                      </p>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 md:ml-12">
                      <div className="flex items-center justify-center w-8 h-8 bg-teal-600 rounded shadow-md shadow-black">
                        <p className="text-base font-medium leading-none text-white">
                          02
                        </p>
                      </div>
                      <p className="ml-3 text-base font-medium leading-4 text-white">
                        Optional
                      </p>
                    </div>
                  </div>

                  <div className="w-full p-8 mt-10 bg-teal-600 rounded-md shadow-md shadow-black md:w-5/12">
                    <div className="items-center">
                      <h1 className="mb-4 text-3xl font-bold text-white focus:outline-none">
                        Optional
                      </h1>
                      <div className="flex flex-col mt-2">
                        <h1 className="pt-2 font-extrabold">First Name</h1>
                        <Field
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded shadow-md shadow-black"
                        />
                      </div>
                      <div className="flex flex-col mt-2">
                        <h1 className="pt-2 font-extrabold">Last Name</h1>
                        <Field
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          className="w-full p-3 text-sm font-medium leading-none text-gray-900 bg-gray-100 border border-gray-200 rounded shadow-md shadow-black"
                        />
                      </div>
                      <div className="relative mt-2">
                        <h1 className="pt-2 font-extrabold">Gender</h1>

                        <Field
                          className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Gender"
                          name="gender"
                          as="select"
                        >
                          <option value="Prefer not to say">
                            Prefer not to say
                          </option>
                          <option value="Female Identifying">
                            Female Identifying
                          </option>
                          <option value="Male Identifying">
                            Male Identifying
                          </option>
                          <option value="Non-Conforming">Non-Conforming</option>
                        </Field>
                      </div>
                      <div className="relative mt-2">
                        <h1 className="pt-2 font-extrabold">
                          Favorite Workout Type
                        </h1>

                        <Field
                          className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Favorite Workout Type"
                          name="favoriteWorkoutType"
                          as="select"
                        >
                          <option value="Cardio">Cardio</option>
                          <option value="Strength">Strength</option>
                        </Field>
                      </div>
                      <div className="relative mt-2">
                        <h1 className="pt-2 font-extrabold">Goal</h1>

                        <Field
                          className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Goal"
                          name="goal"
                          as="select"
                        >
                          <option value="select" disabled>
                            --
                          </option>
                          <option value="Just getting started">
                            Just getting started
                          </option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Competition">Competition</option>
                          <option value="Weight Loss">Weight Loss</option>
                          <option value="Hobby">Hobby</option>
                          <option value="Other">Other</option>
                        </Field>
                      </div>
                      <div className="relative mt-2">
                        <h1 className="pt-2 font-extrabold">
                          Workout Frequency (Per Week)
                        </h1>

                        <Field
                          className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-md appearance-none shadow-black focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Frequency"
                          name="frequency"
                          as="select"
                        >
                          <option value="0">0 days</option>
                          <option value="1">1 day</option>
                          <option value="2">2 days</option>
                          <option value="3">3 days</option>
                          <option value="4">4 days</option>
                          <option value="5">5 days</option>
                          <option value="6">6 days</option>
                          <option value="7">7 days</option>
                        </Field>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center px-12 py-4 mt-10 bg-purple-600 rounded-md shadow-md cursor-pointer hover:bg-purple-700 shadow-black focus:outline-none md:mt-10 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                    >
                      <span className="text-sm font-medium text-center text-white capitalize">
                        Submit
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
