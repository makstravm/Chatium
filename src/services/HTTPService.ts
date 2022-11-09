import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const defaultConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => config
);

axiosInstance.interceptors.response.use(
  (res): AxiosResponse => res,
  async (err): Promise<AxiosError> => {
    if (err?.response?.data) {
      throw err.response.data.error;
    }

    throw err;
  }
);

export const GET = async (url: string) => await axiosInstance.get(url);

export const POST = async <T, V>(
  url: string,
  values: V,
  config: AxiosRequestConfig = defaultConfig
): Promise<AxiosResponse<T>> => await axiosInstance.post(url, values, config);

export const PUT = async <T, V>(
  url: string,
  values: V,
  config: AxiosRequestConfig = defaultConfig
): Promise<AxiosResponse<T>> => await axiosInstance.put(url, values, config);

export const DELETE = async <T>(
  url: string,
  config: AxiosRequestConfig = defaultConfig
): Promise<AxiosResponse<T>> => await axiosInstance.delete(url, config);

export const PATCH = async <T, V>(
  url: string,
  values: V,
  config: AxiosRequestConfig = defaultConfig
): Promise<AxiosResponse<T>> => await axiosInstance.patch(url, values, config);
