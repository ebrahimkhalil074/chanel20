
import axios from "axios";


import envConfig from "@/src/config/env.config";
import { getNewRefreshToken } from "@/src/sevices/authServices";
import { cookies } from "next/headers";


const axiosInstance = axios.create({
  baseURL:"https://test.channeltwenty.com",
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;

    if (error?.response?.status === 401 && !config.sent) {
      config.sent = true;
      const res = await getNewRefreshToken();
      const accessToken = res.data.accessToken;

      config.headers["Authorization"] = accessToken;
      // Update the access token in the cookie store
      (await
        // Update the access token in the cookie store
        cookies()).set("accesstoken", accessToken);

      return axiosInstance(config);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
