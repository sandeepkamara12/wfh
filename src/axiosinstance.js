import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Request Interceptor (Attaching Token)
axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const persistRoot = localStorage.getItem("persist:root");

      if (persistRoot) {
        const parsedRoot = JSON.parse(persistRoot);
        const auth = JSON.parse(parsedRoot.auth);
        const token = auth?.user?.jwtToken;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (err) {
      console.error("Error parsing token", err);
    }

    return config;
  },
  (error) => Promise.reject(error)
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
