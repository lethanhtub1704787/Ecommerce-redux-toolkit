import AppConfig from './AppConfig';
import {create} from 'apisauce';

const ApiConfig = {
  baseURL: AppConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'api-key': AppConfig.API_KEY,
    timezone: new Date().getTimezoneOffset(),
  },
  timeOut: 30000,
};

const appApi = create(ApiConfig);

export {ApiConfig, appApi};
