import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(getAuth().currentUser);
  onAuthStateChanged(getAuth(), (u) => {
    setUser(u);
  });

  return (
    <div>
      <Routes />
      <Navbar />
    </div>
  );
}

export default App;
