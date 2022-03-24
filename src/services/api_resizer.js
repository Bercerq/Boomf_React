import axios from "axios";

export const apiResizer = axios.create({
  baseURL: "https://resizer.staging.boomf.com",
});
apiResizer.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Boomf_accessToken") || null;
    if (token) {
      config.headers = {
        Authorization: "Bearer " +  token,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

apiResizer.interceptors.response.use(
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
