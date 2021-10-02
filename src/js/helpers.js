import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://api.unsplash.com",
});

httpClient.interceptors.request.use(function (config) {
  config.headers.Authorization =
    "Client-ID ZQHR8VOlUDxW75jVNO0aZX6m5GnHKBeRzus2qCB-Ra8";
  return config;
});
