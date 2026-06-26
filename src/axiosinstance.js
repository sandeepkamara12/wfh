import axios from "axios";
import { getTokenFromPersist } from "./helper/authHelper";
// `import { logout } from "./features/auth/loginSlice";
// import { persistor } from "./store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Request Interceptor (Attaching Token)
axiosInstance.interceptors.request.use(
  (config) => {
     const token = getTokenFromPersist();
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
   if (error.response?.status === 401) {
      console.warn("Unauthorized! Token may be expired.");
      // 👉 optional: logout logic here
       localStorage.removeItem("persist:root");
  window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
