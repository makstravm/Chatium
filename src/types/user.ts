export interface IResponseAfterUpdateToken {
  refresh_token: string;
  id_token: string;
  user_id: string;
}

export interface IRequestGetAccountInfo {
  idToken: string;
}

export interface IUser {
  displayName: string;
  email: string;
}

export interface IUserProfile extends IUser {
  localId: string;
  photoUrl?: string;
  createdAt: string;
}

export interface IResponseGetAccountInfo {
  users: IUserProfile[];
}
