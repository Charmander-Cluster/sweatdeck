import React from "react";

export const Biceps = (props) => {
  const handleChange = props.handleChange

  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue={props.type}
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>barbell/dumbell curl</option>
      <option>hammer curl</option>
    </select>
  );
};

export const Triceps = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue={props.type}
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>tricep extension</option>
      <option>bench dips</option>
      <option>reverse grip bench press</option>
      <option>skull crushers</option>

    </select>
  );
};

export const Back = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue={props.type}
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option >pullup</option>
      <option>row</option>
      <option>lat pulldown</option>
    </select>
  );
};

export const Shoulders = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue={props.type}
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>Arnold press</option>
      <option>lateral raise</option>
      <option>barbell / kettlebell overhead press</option>
    </select>
  );
};

export const Quads = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue={props.type}
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>squat</option>
      <option>forward lunge</option>
      <option>backward lunge</option>
      <option>leg press</option>
    </select>
  );
};

export const Chest = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue={props.type}
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>bench press</option>
      <option>chest fly</option>
      <option>dip</option>
    </select>
  );
};

export const Abs = (props) => {
  const handleChange = props.handleChange
  return (
    <select className="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-1 dark:placeholder-gray-400 dark:text-teal-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    name="type"
    defaultValue={props.type}
    onChange={handleChange}>
      <option value="select" disabled>--</option>
      <option>crunch</option>
      <option>sit up</option>
      <option>russian twist</option>
      <option>plank</option>
      <option>side plank</option>
    </select>
  );
};
