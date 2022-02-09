import React, { useEffect } from "react";
import { getDataThunk } from "../store/getData";
import { useDispatch, useSelector } from "react-redux";

const Popup = () => {
  const data = useSelector((state) => state.getData);

  console.log("from popup:" , data); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
};

export default Popup;
