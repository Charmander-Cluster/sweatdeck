import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { editUserThunk } from "../../store/users";
import { sendPasswordReset } from "../../store";
import { useRouteMatch } from "react-router-dom";
import maleImage from "../../assets/male-useravatar.png";
import femaleImage from "../../assets/female-useravatar.png";
import defaultImage from "../../assets/default-useravatar.png";
import { fetchSingleUserThunk } from "../../store/users";

const EditUser = () => {
  const authUser = useSelector((state) => state.users.user);
  const [userState, setUserState] = useState({
    username: authUser.username || "",
    state: authUser.state || "",
    favoriteWorkoutType: authUser.favoriteWorkoutType || "",
    goal: authUser.goal || "",
  });

  let history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    dispatch(fetchSingleUserThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (isLoading) {
      fetchData();
    }
    setLoading(false);
  }, [fetchData, isLoading]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editUserThunk(id, userState));
    history.push(`/users/${id}`);
  };
  // const actionCodeSettings = {
  //   url: "https://www.example.com/?email=user@example.com",
  //   iOS: {
  //     bundleId: "com.example.ios",
  //   },
  //   android: {
  //     packageName: "com.example.android",
  //     installApp: true,
  //     minimumVersion: "12",
  //   },
  //   handleCodeInApp: true,
  // };

  // console.log(useRouteMatch());

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <form onSubmit={handleSubmit}>
        <div className="pt-20 overflow-hidden rounded">
          <div className="flex justify-center w-full pt-4 -mt-20">
            <div className="w-32 h-32">
              {authUser && authUser.gender === "Male" ? (
                <div className="w-32 h-32">
                  <img
                    src={maleImage}
                    alt="User Profile"
                    className="object-cover w-full h-full rounded-full shadow-md shadow-black"
                  />
                </div>
              ) : authUser.gender === "Female" ? (
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
              {authUser.username}
            </h1>
            <div className="pt-4">
              <h1 className="font-extrabold">Username</h1>
              <label htmlFor="username"></label>
              <input
                onChange={handleChange}
                name="username"
                value={userState.username}
                className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
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

              <select
                aria-label="Selected tab"
                className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                name="state"
                defaultValue={userState.state}
                onChange={handleChange}
              >
                <option value={userState.state} disabled>
                  {userState.state}
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
              </select>
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
              <select
                aria-label="Selected tab"
                className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                placeholder="Favorite Workout Type"
                name="favoriteWorkoutType"
                onChange={handleChange}
                defaultValue={userState.favoriteWorkoutType}
              >
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
              </select>
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
              <select
                aria-label="Selected tab"
                className="block w-full py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none form-select focus:ring-teal-500 focus:border-teal-500"
                placeholder="Goal"
                name="goal"
                onChange={handleChange}
                defaultValue={userState.goal}
              >
                <option value="Get started">{authUser.goal}</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Competition">Competition</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Hobby">Hobby</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button className="flex flex-row justify-center px-8 py-3 my-4 text-white transition duration-150 ease-in-out bg-teal-700 rounded shadow-md text-1xl shadow-black hover:bg-teal-600">
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
      </form>
      <button
        className="ml-1 underline"
        onClick={() => sendPasswordReset(authUser.email)}
      >
        Password Reset
      </button>
    </div>
  );
};

export default EditUser;

{
  /* <input
onChange={handleChange}
name="state"
value={userState.state}
className="relative block py-2 pl-3 pr-20 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
placeholder="State"
/> */
}
