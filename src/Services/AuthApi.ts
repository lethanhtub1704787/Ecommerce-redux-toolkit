import {appApi} from '@/Api/ApiConfig';

export const signInApi = (
  email: string,
  password: string,
  deviceId?: string,
) => {
  appApi.setHeaders({
    'device-id': deviceId ?? '',
  });
  return appApi.post('auth/buyers/sign-in', {email, password});
};

export const signUpApi = (
  email: string,
  password: string,
  deviceId?: string,
) => {
  appApi.setHeaders({
    'device-id': deviceId ?? '',
  });
  return appApi.post('auth/buyers/sign-up', {email, password});
};
