import { POST } from "services/HTTPService";
import { IUsersArray, ITokenId, IUpdatedToken } from "types";

export const updateTokenApi = (value: string) =>
  POST<IUpdatedToken, string>(
    `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    `grant_type=refresh_token&refresh_token=${value}`,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

export const getAccountInfoApi = (value: ITokenId) =>
  POST<IUsersArray, ITokenId>(
    `${process.env.FIREBASE_AUTH_API_PATH}lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    value
  );
