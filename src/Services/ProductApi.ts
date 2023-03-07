import {appApi} from '@/Api/ApiConfig';

const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI2M2VjNGMzMjI4YjliYjNlMzE4MmYxNDYiLCJpYXQiOjE2NzY0MzAzODYsImV4cCI6MTY3OTAyMjM4Nn0.9snCGJVhFaRPtm_Nr7eL7CLwtSkNAPIuWH8wAZMCI08';

export const getProductApi = () => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.get('/product');
};

export const getCategoryApi = () => {
  appApi.setHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
  return appApi.get('/category');
};
