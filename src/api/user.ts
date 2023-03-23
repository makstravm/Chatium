import { POST, PUT } from "services/HTTPService";
import { IUsersArray, IUpdatedToken, IdTokenType } from "types";
import { IUser, IUserResponse, IUserSaveRequest } from "types";

export const updateTokenApi = (value: string) =>
  POST<IUpdatedToken, string>(
    `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    `grant_type=refresh_token&refresh_token=${value}`,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

export const getAccountInfoApi = ({ idToken }: { idToken: IdTokenType }) =>
  POST<IUsersArray, { idToken: IdTokenType }>(
    `${process.env.FIREBASE_AUTH_API_PATH}lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    { idToken }
  );

export const saveUserToRTBaseApi = (value: IUser, userId: string) =>
  PUT<IUserResponse, IUserSaveRequest>(
    `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`,
    {
      ...value,
      photoUrl: null,
      createdAt: { ".sv": "timestamp" },
    }
  );
