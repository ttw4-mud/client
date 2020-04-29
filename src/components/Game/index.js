import React from "react";
import Instructions from "../Instructions/index";
import Map from "../Map/index";
import { Mapwrapper, GamePage } from "../CustomStyles/index";

const Game = () => {
  return (
    <GamePage>
      <h1>You have been redirect to the game page....coming soon</h1>
      <Mapwrapper>
        <Map />
      </Mapwrapper>
      <Instructions />
    </GamePage>
  );
};

export default Game;
