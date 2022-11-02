import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const request = axios.create({
  // 基础配置
  timeout: 5000, // 超时时间
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false // 跨域请求时是否需要凭证
});

request.interceptors.request.use((config: AxiosRequestConfig) => {
  // do something 数据请求发起之前 处理数据
  return config;
});

request.interceptors.response.use(
  (response: AxiosResponse) => {
    // do something 数据响应时，数据拦截处理
    return Promise.resolve(response);
  },
  (error) => {
    // do something 异常处理
    return Promise.reject(error);
  }
);

export default request;
