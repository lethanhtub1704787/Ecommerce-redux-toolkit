import {configureStore} from '@reduxjs/toolkit';
import logger from './Logger';
import rootReducer from './Reducers';
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
