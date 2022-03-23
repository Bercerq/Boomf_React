import axios from "axios";

export const api = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "http://localhost:5000",
  baseURL: "https://api-shopify.staging.boomf.com",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Boomf_accessToken") || null;
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
    if (error.response.status === 401) {
      localStorage.removeItem("Boomf_accessToken");
      if (!window.location.href.includes("login")) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    } else {
      return error.response;
    }
  }
);
