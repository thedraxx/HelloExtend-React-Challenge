import axios from "axios";

const dogsAPI = axios.create({
  baseURL: "https://dog.ceo/api",
});

export default dogsAPI;
