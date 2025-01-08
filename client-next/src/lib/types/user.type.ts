export enum USER_ROLE {
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum PROVIDER {
  CREDENTIALS = 'CREDENTIALS',
  GOGGLE = 'GOOGLE',
}

export interface IUser {
  _id: string;
  email: string;
  name: string;
  role: USER_ROLE;
  provider: PROVIDER;
  isDeleted: boolean;
}

export type TLoggedUser = Omit<IUser, 'isDeleted'>;