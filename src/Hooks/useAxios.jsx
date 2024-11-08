import axios from "axios";

const instance = axios.create({
//   baseURL: "https://localhost:5000",
  baseURL: "https://burger-valley-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;