import axios, { AxiosRequestConfig } from "axios";

export const httpClient = (config: AxiosRequestConfig) => {
  return axios({
    ...config,
    method: config.method,
    url: config.url,
    headers: config.headers,
    data: config.data,
  });
};
