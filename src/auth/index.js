import axios from "axios";

export const axiosWithAuth = () => {
  const key = localStorage.getItem("key");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: key,
    },
  });
};
