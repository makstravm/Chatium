import { POST } from "services/HTTPService";
import {
  IRequestGetAccountInfo,
  IResponseAfterUpdateToken,
  IResponseGetAccountInfo,
} from "types";

export const updateTokenApi = (value: string) =>
  POST<IResponseAfterUpdateToken, string>(
    `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    `grant_type=refresh_token&refresh_token=${value}`,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

export const getAccountInfoApi = (value: IRequestGetAccountInfo) =>
  POST<IResponseGetAccountInfo, IRequestGetAccountInfo>(
    `${process.env.FIREBASE_AUTH_API_PATH}lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    value
  );
