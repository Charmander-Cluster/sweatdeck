import React, { useEffect } from "react";
import { fetchSingleUserThunk } from "../store/users";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { user } = useSelector((state) => {
    return {
      user: state.users.user,
    };
  });

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleUserThunk(id));
  }, [dispatch, id]);

  console.log("User State", user);

  return (
    <div className="flex items-center justify-center py-8">
      <div className="rounded overflow-hidden pt-20">
        <div className="-mt-20 w-full flex justify-center pt-4">
          <div className="h-32 w-32">
            <img
              src="https://foundrmeet.com/wp-content/themes/cera/assets/images/avatars/user-avatar.png"
              alt="User Profile"
              className="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div className="flex flex-col px-6 mt-4">
          <h1 className="font-bold text-3xl text-center mb-1">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-base pt-2 text-center">
            Birthday: {user.birthday}
          </p>
          <p className="text-center text-base pt-2">State: {user.state}</p>
          <button className="flex flex-row text-1xl mx-2 my-2 justify-center bg-teal-700 transition duration-150 ease-in-out hover:bg-teal-600 rounded text-white px-8 py-3">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            Edit Settings
          </button>
        </div>

        <div className="flex items-center justify-center py-8 px-4">
          <div className="max-w-sm w-full shadow-lg">
            <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
              <div className="px-4 flex items-center justify-center">
                <span
                  tabIndex="0"
                  className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
                >
                  October 2020
                </span>
                <div className="flex items-center">
                  <button
                    aria-label="calendar backward"
                    className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                  ></button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-12 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Mo
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Tu
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            We
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Th
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Fr
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Sa
                          </p>
                        </div>
                      </th>
                      <th>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            Su
                          </p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            1
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            2
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            3
                          </p>
                        </div>
                      </td>
                      <td className="pt-6">
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            4
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            5
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            6
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            7
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="w-full h-full">
                          <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                            <p className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 focus:bg-teal-500 hover:bg-teal-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-teal-700 rounded-full">
                              8
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            9
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            10
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            11
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            12
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            13
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            14
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            15
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            16
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            17
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            18
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            19
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            20
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            21
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            22
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            23
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            24
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100">
                            25
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            26
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            27
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            28
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            29
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                          <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                            30
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
