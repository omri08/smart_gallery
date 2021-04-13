import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": "5f4126479f9d4d5396339b12f66e06fb",
  },
});

export const getImage = axios.create({
  baseURL: "https://picsum.photos/200",
});

export default api;
