import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

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

export const GET = async (url: string) => {
  const result = axiosInstance.get(url);

  return await result;
};

export const POST = async <T, V>(
  url: string,
  values: V
): Promise<AxiosResponse<T>> => {
  const result = axiosInstance.post(url, values);

  return await result;
};

export const PUT = async <T, V>(
  url: string,
  values: V
): Promise<AxiosResponse<T>> => {
  const result = axiosInstance.put(url, values);

  return await result;
};

export const DELETE = async <T>(url: string): Promise<AxiosResponse<T>> => {
  const result = axiosInstance.delete(url);

  return await result;
};

export const PATCH = async <T, V>(
  url: string,
  values: V
): Promise<AxiosResponse<T>> => {
  const result = axiosInstance.patch(url, values);

  return await result;
};
