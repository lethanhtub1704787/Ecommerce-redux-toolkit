import {appApi} from '@/Api/ApiConfig';

export const getOrders = (accessToken: string) => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.get('/order/buyer');
};
