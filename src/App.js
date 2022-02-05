import React, { useEffect, useState } from "react";
import "./index.css";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchLoginUser } from "./store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [user, setUser] = useState(getAuth().currentUser);

  const dispatch = useDispatch();

  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  useEffect(() => {
    if (!user) {
      dispatch(fetchLoginUser());
    }
  }, [dispatch, user]);

  return (
    <div>
      <Routes />
      <Navbar />
    </div>
  );
}

export default App;
