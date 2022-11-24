export interface IUpdatedToken {
  refresh_token: string;
  id_token: IdTokenType;
  user_id: string;
}

export type IdTokenType = string;

export interface IUser {
  displayName: string;
  email: string;
}

export interface IUserProfile extends IUser {
  localId: string;
  photoUrl?: string;
  createdAt: string;
}

export interface IUsersArray {
  users: IUserProfile[];
}
