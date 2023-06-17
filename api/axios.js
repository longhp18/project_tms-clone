import axios from "axios";

// Create a new instance of axios with custom configuration
export const axiosInstance = axios.create({
   baseURL: "https://code-hub.online/tms-api",
});
