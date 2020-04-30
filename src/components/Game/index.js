import React, { useState } from "react";
import axiosWithAuth from "../../auth/index";
import Instructions from "../Instructions/index";
import Movement from "../Directions/index";
import Map from "../Map/index";
import {
  MapWrapper,
  GamePage,
  Title,
  StartButton,
  MoveButton,
  ButtonWrapper,
} from "../CustomStyles/index";

const Game = () => {
  const [state, setState] = useState();

  // movement endpoint
  const handleMovement = (direction) => {
    axiosWithAuth()
      .post(
        "https://cors-anywhere.herokuapp.com/https://ttw4-mud-server--staging.herokuapp.com/api/adventure/move/",
        direction
      )
      .then((response) => {
        console.log("adventure response", response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //where the game starts endpoint

  const initializeGame = () => {
    axiosWithAuth()
      .post(
        "https://cors-anywhere.herokuapp.com/https://ttw4-mud-server--staging.herokuapp.com/api/adventure/start/"
      )
      .then((response) => {
        console.log("initializeGame response", response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <GamePage>
      <MapWrapper>
        <StartButton onClick={initializeGame}>Start</StartButton>
        <Map />
        <Instructions />
        <ButtonWrapper>
          <MoveButton onClick={handleMovement}>N</MoveButton>
          <MoveButton onClick={handleMovement}>S</MoveButton>
          <MoveButton onClick={handleMovement}>E</MoveButton>
          <MoveButton onClick={handleMovement}>W</MoveButton>
        </ButtonWrapper>
      </MapWrapper>
    </GamePage>
  );
};

export default Game;
