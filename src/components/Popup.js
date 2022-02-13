import React, { useEffect } from "react";
import { getDataThunk } from "../store/getData";
import { useDispatch, useSelector } from "react-redux";
import {reco} from "../brain/index"
//import brain from "brain.js" 
//const brain = require('brain.js');
//import {changeData} from "../brain/addGroups"


const Popup = () => {
  const dispatch = useDispatch();
  //const data = useSelector((state) => state.getData);

  // useEffect(() => {
  //   dispatch( changeData());
  // }, [dispatch]);

  //console.log("from popup:" , reco([80, 33.62505])); 
  

  //console.log(reco([1930, 27.994402, -81.760254]))

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
};

export default Popup;