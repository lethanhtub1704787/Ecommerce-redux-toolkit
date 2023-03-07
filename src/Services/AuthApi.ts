import {appApi} from '@/Api/ApiConfig';
import {SignInData, SignUpData} from '@/Types/authType';
export const signInApi = (signInData: SignInData) => {
  // appApi.setHeaders({});
  // console.log('log API KEY:', AppConfig.API_KEY);
  return appApi.post('auth/buyers/sign-in', signInData);
};

export const signUpApi = (signUpData: SignUpData) => {
  // appApi.setHeaders({});
  return appApi.post('auth/buyers/sign-up', signUpData);
};

export const logoutApi = (accessToken: string) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.post('auth/sign-out');
};

export const checkToken = (accessToken: string) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.post('/auth/check-token');
};
