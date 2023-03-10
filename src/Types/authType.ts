export type UserInfo = {
  name: string;
  email: string;
  password: string;
};

export type UserData = {
  accessToken: string;
  refreshToken: string;
  roleName: string;
  user: object;
};

export type authState = {
  data: UserData;
  isValidToken: boolean | undefined;
  errorMessage: string | null;
};

export type SignUpData = {
  email: string;
  password: string;
  fisrtName: string;
  lastName: string;
  fullName: string;
  gender: string;
  preferredLanguage: 'vi' | 'en';
};

export type SignInData = {
  email: string;
  password: string;
};
