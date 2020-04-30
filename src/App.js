import React from "react";
import { Route } from "react-router-dom";
/**********************************************************/
import PrivateRoute from "./auth/PrivateRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Game from "./components/Game";

import { AppContainer, Title } from "./components/CustomStyles/index";

function App() {
  return (
    <AppContainer>
      <Title />
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute component={Game} exact path="/game" />
    </AppContainer>
  );
}

export default App;
