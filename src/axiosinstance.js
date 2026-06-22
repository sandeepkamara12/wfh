import axios from "axios";
import { removeToken } from "./features/auth/loginSlice";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Request Interceptor (Attaching Token)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor (Handling 401 Unauthorized)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // const apiPath = error.config?.url;

    if (
      error.response &&
      error.response.status === 401
      //  && !apiPath?.includes("/login") &&  !apiPath?.includes("/change-password")
    ) {
      localStorage.removeItem("jwtToken");
      import("./store").then(({ store }) => {
        store.dispatch(removeToken());
        // window.location.href = "/login";
      });
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
