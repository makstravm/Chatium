import { AxiosError } from "axios";
import { IError } from "types";

export const handleError = (err: AxiosError<{ error: IError }>): IError => {
  if (err?.response) {
    const error = err.response.data.error;

    return error;
  }

  return { code: err.code, message: err.code };
};
