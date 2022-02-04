import React, { useEffect, useState } from "react";
import "./index.css";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchLoginUser } from "./store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const authUser = useSelector((state) => state.auth);

  const [user, setUser] = useState(getAuth().currentUser);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!authUser.uid || isLoading) {
      dispatch(fetchLoginUser());
    }

    return () => {
      setLoading(false);
    };
  }, [dispatch, authUser.uid, isLoading]);

  return (
    <div>
      <Routes user={user} />
      <Navbar />
    </div>
  );
}

export default App;
