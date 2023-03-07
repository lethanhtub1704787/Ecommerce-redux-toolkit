import AppConfig from './AppConfig';
import {create} from 'apisauce';

// const API_KEY = 'wzCOoSCN@N';
// const API_URL = 'https://f-store.shop/v1/';

// const API_KEY = 'wzCOoSCNHN';
// const API_URL = 'https://api.fstore.com.vn/v1/';

const ApiConfig = {
  //   baseURL: '',
  baseURL: AppConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'x-api-key': AppConfig.API_KEY,
    timezone: new Date().getTimezoneOffset(),
  },
  timeOut: 30000,
};

const appApi = create(ApiConfig);

export {ApiConfig, appApi};
