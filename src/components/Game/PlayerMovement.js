import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../auth/index";

const Player = () => {
  const movingCharacter = (i) => {
    axiosWithAuth()
      .post("/adventure/move", { direction: i })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error with sending dir", err.response);
      });
  };

  return (
    <div>
      <div
        onKeyDown={() => {
          movingCharacter("w");
        }}
      >
        ➡︎
      </div>
      <div
        onKeyDown={() => {
          movingCharacter("n");
        }}
      >
        ⬆︎
      </div>
      <div
        onKeyDown={() => {
          movingCharacter("s");
        }}
      >
        ⬇︎
      </div>
      <div
        onKeyDown={() => {
          movingCharacter("e");
        }}
      >
        ⬅︎
      </div>
    </div>
  );
};

export default Player;
