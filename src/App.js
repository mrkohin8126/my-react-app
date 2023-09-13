import { useContext, useState } from "react";
import "./App.css";
import Homepage from "./component/Homepage";
import Loginpage from "./component/Loginpage";
import GlobalState from "./context/GlobalState";
import MyContext from "./context/MyContext";

function App() {
  const context = useContext(MyContext);
  const { isTokenExists } = context;

  return (
    // <GlobalState>
    <div className="App w-full min-h-screen text-white">
      {isTokenExists ? <Homepage /> : <Loginpage />}
      {/* <Homepage /> */}
      {/* <Loginpage /> */}
    </div>
    // </GlobalState>
  );
}

export default App;
