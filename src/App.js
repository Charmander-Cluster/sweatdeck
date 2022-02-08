import React, { useEffect, useState, useCallback } from "react";
import "./index.css";
import Routes from "./Routes";
import Navbar from "./components/Home/Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchLoginUser } from "./store/auth";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(getAuth().currentUser);

  onAuthStateChanged(getAuth(), (user) => {
    setUser(user);
  });

  const fetchUser = useCallback(() => {
    dispatch(fetchLoginUser());
  }, [dispatch]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && user) {
      fetchUser();
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, fetchUser, user]);

  return (
    <div>
      <Routes />
      <Navbar />
    </div>
  );
}

export default App;
