export interface IUpdatedToken {
  refresh_token: string;
  id_token: IdTokenType;
  user_id: IdUserType;
}

export type IdTokenType = string;
export type IdUserType = string;

export interface IUser {
  displayName: string;
  email: string;
}

export interface IUserProfile extends IUser {
  localId: IdUserType;
  photoUrl?: string;
  createdAt: string;
}

export interface IUsersArray {
  users: IUserProfile[];
}
