import React from "react";
import { Route } from "react-router-dom";
/**********************************************************/
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
