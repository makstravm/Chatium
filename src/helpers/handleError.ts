import { AxiosError } from "axios";
import { IError } from "types";

export const handleError = (err: AxiosError<IError>): IError => {
  if (err?.response && err instanceof AxiosError<IError>) {
    const error = err.response.data;

    return error;
  }

  return {
    error: { code: err.code, message: err.code },
  };
};
