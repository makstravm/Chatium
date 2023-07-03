import { AxiosError } from "axios";
import { IError } from "types";

export const handleError = (err: AxiosError<{ error: IError }>): IError => {
  if (err?.response) {
    const error = err.response.data.error;

    const message = error.message?.toLowerCase().split('_').join('-');

    return { ...error, message };
  }

  return { code: err.code, message: err.code };
};
