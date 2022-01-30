import React from "react"
import "./index.css";
import Routes from "./Routes";

const code = new URLSearchParams(window.location.search).get("code");

function App() {

  return (
    <div>
      <Routes code={code} />
    </div>
  );
}

export default App;
