import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../auth/index";
import Instructions from "../Instructions/index";
import Character from "./Character";
import Map from "../Map/index";
import {
  MapWrapper,
  GamePage,
  StartButton,
  ButtonWrapper,
} from "../CustomStyles/index";

const Game = ({ status }) => {
  const [state, setState] = useState();

  useEffect(() => {
    if (status) {
      setState([...state, status]);
    }
  }, [state, status]);

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

  const initializeGame = (e) => {
    e.persist();
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
      <Character />
      <MapWrapper>
        <StartButton onClick={initializeGame}>Start</StartButton>
        <Map />
        <Instructions />
        <ButtonWrapper onClick={handleMovement}></ButtonWrapper>
      </MapWrapper>
    </GamePage>
  );
};

export default Game;
