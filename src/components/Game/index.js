import React, { useState, useEffect } from "react";
import Instructions from "../Instructions/index";
import Character from "./Character";
import Player from "./PlayerMovement";
import axiosWithAuth from "../../auth/index";

import useEventListener from "@use-it/event-listener";

import { DIRECTION, MAX_STEP } from "./Constants";

import {
  MapWrapper,
  GamePage,
  StartButton,
  ButtonWrapper,
  TilePre,
  RoomInfo,
  // SignOutButton
} from "../CustomStyles/index";

const Game = () => {
  const [gameData, setGameData] = useState({
    tile: { drawing: { string: "" } },
  });

  const [requestedDirection, setRequestedDirection] = useState(undefined);
  // const SignOut = () => {
  //   localStorage.clear('token');
  //   // eslint-disable-next-line no-restricted-globals
  //   history.push('/');
  // };
  useEffect(() => {
    axiosWithAuth()
      .post("/adventure/start/")
      .then((res) => {
        console.log(res.data);
        setGameData(res.data);
      })
      .catch((err) => {
        console.log("Error with init", err.response);
      });
  }, []);

  useEventListener("keydown", ({ code }) => {
    if (code.indexOf("Arrow") === -1) return;
    setRequestedDirection(DIRECTION[code.replace("Arrow", "").toUpperCase()]);
  });

  useEffect(() => {
    if (typeof requestedDirection === "string") {
      axiosWithAuth()
        .post("/adventure/move/", { direction: requestedDirection })
        .then((res) => {
          console.log(res.data);
          setGameData(res.data);
        })
        .catch((err) => {
          console.log("Error with move", err.response);
        })
        .finally(() => {
          setRequestedDirection(undefined);
        });
    }
  }, [requestedDirection]);

  return (
    <GamePage>
      <RoomInfo>{gameData.messages}</RoomInfo>
      <MapWrapper>
        <TilePre>{gameData.tile.drawing.string}</TilePre>
        <Instructions />
        <ButtonWrapper></ButtonWrapper>
      </MapWrapper>
    </GamePage>
  );
};

export default Game;
