export interface IUpdatedToken {
  refresh_token: string;
  id_token: IdTokenType;
  user_id: IdUserType;
}

export type IdTokenType = string;
export type IdUserType = string;

export interface IUserProfile extends IUser {
  localId: IdUserType;
  photoUrl?: string;
  createdAt: string;
}

export interface IUsersArray {
  users: IUserProfile[];
}
export interface ICreatedAt {
  ".sv": "timestamp";
}

export interface IUser {
  name: string;
  email: string;
}

export interface IUserResponse extends IUser {
  photoUrl: string | null;
  createdAt: number;
}

export interface IUserSaveRequest extends IUser {
  createdAt: ICreatedAt;
  photoUrl: null;
}
