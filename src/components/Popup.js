import React, { useEffect } from "react";
import { getDataThunk } from "../store/getData";
import { useDispatch, useSelector } from "react-redux";
import {reco} from "../brain/index"
//import brain from "brain.js" 
const brain = require('brain.js');


const Popup = () => {
  //const dispatch = useDispatch();

  //const data = useSelector((state) => state.getData);

  // useEffect(() => {
  //   dispatch(getDataThunk());
  // }, [dispatch]);

  //console.log("from popup:" , data); 
  //console.log(reco([73, 27.994402, -81.760254]))
  console.log(brain)

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
};

export default Popup;
