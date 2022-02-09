import axios from "axios";

export const api = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "http://localhost:5000",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken") || null;
    if (token) {
      config.headers = {
        Authorization: token,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
      if (!window.location.href.includes("login")) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    } else {
      return error.response;
    }
  }
);
