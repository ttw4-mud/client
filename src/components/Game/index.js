import React from "react";
import Instructions from "../Instructions/index";
import Character from "./Character";
import MapComponent from "../Map/index";

import {
  MapWrapper,
  GamePage,
  StartButton,
  ButtonWrapper,
  // SignOutButton
} from "../CustomStyles/index";

const Game = () => {
  // const SignOut = () => {
  //   localStorage.clear('token');
  //   // eslint-disable-next-line no-restricted-globals
  //   history.push('/');
  // };

  return (
    <GamePage>
      <Character />
      <MapWrapper>
        <StartButton>Start</StartButton>
        <MapComponent />
        <Instructions />
        <ButtonWrapper></ButtonWrapper>
      </MapWrapper>
    </GamePage>
  );
};

export default Game;
