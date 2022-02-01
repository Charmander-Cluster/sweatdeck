import React from "react";
import "./index.css";
import Routes from "./Routes";
import Navbar from "./components/Navbar";

const code = new URLSearchParams(window.location.search).get("code");

function App() {

  return (
    <div>
      <Routes code={code} />
      <Navbar />
    </div>
  );
}

export default App;
