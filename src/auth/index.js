import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("key");

  return axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/https://ttw4-mud-server--staging.herokuapp.com/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  });
};

export default axiosWithAuth;
