import {signInApi, signUpApi} from '@/Services/AuthApi';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

type authState = {
  authState: string;
};

const initialState: authState = {
  authState: '',
};

export const authStateSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.authState = action.payload;
    },
  },
  extraReducers(builder: any) {
    builder
      /** GET CATEGORY */
      .addCase(loginRequest.pending, (currentState: any) => {
        // currentState.statusGetCategory = StatusLoading.LOADING;
      })
      .addCase(
        loginRequest.fulfilled,
        (currentState: any, {payload}: PayloadAction<{items: any}>) => {
          //   currentState.statusGetCategory = StatusLoading.SUCCEEDED;
          //   currentState.listCategory = payload.items;
        },
      )
      .addCase(
        loginRequest.rejected,
        (currentState: any, {payload}: PayloadAction<Error>) => {
          //   currentState.statusGetCategory = StatusLoading.FAILED;
          //   console.log('>>>>> get category failure');
        },
      );
  },
});

export const loginRequest = createAsyncThunk(
  'auth/login',
  async (payload: {email: string; password: string}, {rejectWithValue}) => {
    console.log('xx');
    const response: any = await signInApi(payload.email, payload.password);
    console.log('responde', response);
    const {data, ok, status} = response;
    if (ok && status === 200) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  },
);

export const signUpRequest = createAsyncThunk(
  'auth/signUp',
  async (payload: {email: string; password: string}, {rejectWithValue}) => {
    const response: any = await signUpApi(payload.email, payload.password);
    const {data, ok, status} = response;
    if (ok && status === 200) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  },
);

export default authStateSlice.reducer;
