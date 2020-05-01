import React, { useEffect, useState } from "react";
import axios from "axios";

export const Player = () => {
  const [player, setPlayer] = useState([]);

  const axiosWithAuth = () => {
    const token = localStorage.getItem("key");

    return axios.create({
      baseURL:
        "https://cors-anywhere.herokuapp.com/https://ttw4-mud-server--staging.herokuapp.com/api",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  };

  useEffect(() => {
    axiosWithAuth()
      .post("/adventure/start/", player)
      .then((res) => {
        console.log(res);
        setPlayer(res.data);
      })
      .catch((err) => {
        console.log("Error with init", err.response);
      });
  }, []);

  const movingCharacter = (i) => {
    axiosWithAuth()
      .post("/adventure/move", { direction: i })
      .then((res) => {
        console.log(res.data);
        setPlayer(res.data);
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
