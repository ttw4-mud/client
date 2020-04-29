import React from "react";
import Instructions from "../Instructions/index";
import Map from "../Map/index";
import { Mapwrapper, GamePage, Title } from "../CustomStyles/index";

const Game = () => {
  return (
    <GamePage>
      <Title />
      <Mapwrapper>
        <Map />
      </Mapwrapper>
      <Instructions />
    </GamePage>
  );
};

export default Game;
