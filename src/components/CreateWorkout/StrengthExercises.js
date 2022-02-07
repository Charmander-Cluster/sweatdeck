import React from "react";

export const Biceps = (props) => {
  const handleChange = props.handleChange

  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue="select"
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>Barbell/Dumbell Curl</option>
      <option>Hammer Curl</option>
    </select>
  );
};

export const Triceps = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue="select"
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>Tricep Extension</option>
      <option>Bench Dips</option>
      <option>Reverse grip bench press</option>
      <option>Skull Crushers</option>

    </select>
  );
};

export const Back = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue="select"
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option >Pullup</option>
      <option>Row</option>
      <option>Lat Pulldown</option>
    </select>
  );
};

export const Shoulders = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue="select"
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>Arnold Press</option>
      <option>Lateral Raise</option>
      <option>Barbell / Kettlebell Overhead Press</option>
    </select>
  );
};

export const Quads = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue="select"
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>Squat</option>
      <option>Forward Lunge</option>
      <option>Backward Lunge</option>
      <option>Leg Press</option>
    </select>
  );
};

export const Chest = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue="select"
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>Bench Press</option>
      <option>Chest Fly</option>
      <option>Dip</option>
    </select>
  );
};

export const Abs = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue="select"
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>Crunch</option>
      <option>Sit up</option>
      <option>Russian Twist</option>
      <option>Plank</option>
      <option>Side Plank</option>
    </select>
  );
};
