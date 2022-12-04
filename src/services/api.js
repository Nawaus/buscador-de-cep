import axios from "axios";
// 21061210/json/
const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;
