import {StatusRequest} from '@/Contants';
import {subjectLoading} from '@/Function/RxjsLoading';
import {checkToken, logoutApi, signInApi, signUpApi} from '@/Services/AuthApi';
import {authState, UserData, SignInData, SignUpData} from '@/Types/authType';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

type DataCheckToken = {
  isValid: boolean | undefined;
};

const initialState: authState = {
  data: <UserData>{},
  errorMessage: '',
  isValidToken: undefined,
};

export const authStateSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setDefault: _ => {
      console.log('already set state default');
      return initialState;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers(builder: any) {
    builder
      /** LOG IN */
      .addCase(loginRequest.pending, (currentState: authState) => {
        subjectLoading.next(true);
        currentState.errorMessage = '';
      })
      .addCase(
        loginRequest.fulfilled,
        (currentState: authState, {payload}: PayloadAction<UserData>) => {
          subjectLoading.next(false);
          currentState.data = payload;
          currentState.isValidToken = true;
        },
      )
      .addCase(
        loginRequest.rejected,
        (currentState: authState, {payload}: PayloadAction<Error>) => {
          subjectLoading.next(false);
          currentState.errorMessage = payload.message;
          console.log('>>>>> login failure');
        },
      )
      /** SIGN UP */
      .addCase(signUpRequest.pending, () => {
        subjectLoading.next(true);
      })
      .addCase(
        signUpRequest.fulfilled,
        (currentState: authState, {payload}: PayloadAction<{user: any}>) => {
          subjectLoading.next(false);
          currentState.data = payload.user;
        },
      )
      .addCase(
        signUpRequest.rejected,
        (currentState: authState, {payload}: PayloadAction<Error>) => {
          currentState.errorMessage = payload.message;
          console.log('>>>>> signUp failure');
          subjectLoading.next(false);
        },
      )
      /** CHECK ACCESS TOKEN */
      .addCase(checkAccessToken.pending, () => {})
      .addCase(
        checkAccessToken.fulfilled,
        (currentState: authState, {payload}: PayloadAction<DataCheckToken>) => {
          currentState.isValidToken = payload.isValid;
        },
      )
      .addCase(checkAccessToken.rejected, (currentState: authState) => {
        currentState.isValidToken = false;
      })

      /** LOG OUT */
      .addCase(signOut.pending, () => {
        subjectLoading.next(true);
      })
      .addCase(signOut.fulfilled, () => {
        subjectLoading.next(false);
        return initialState;
      })
      .addCase(signOut.rejected, () => {
        subjectLoading.next(false);
      });
  },
});

export const loginRequest = createAsyncThunk(
  'auth/login',
  async (payload: SignInData, {rejectWithValue}) => {
    const response: any = await signInApi(payload);
    console.log('responde', response);
    const {data, ok, status} = response;
    if (ok && status === StatusRequest.POST) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  },
);

export const signUpRequest = createAsyncThunk(
  'auth/signUp',
  async (payload: SignUpData, {rejectWithValue}) => {
    const response: any = await signUpApi(payload);
    const {data, ok, status} = response;
    if (ok && status === StatusRequest.POST) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  },
);

export const checkAccessToken = createAsyncThunk(
  'auth/check-token',
  async (payload: string, {rejectWithValue}) => {
    const response: any = await checkToken(payload);
    const {data, ok, status} = response;
    if (ok && status === StatusRequest.POST) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  },
);

export const signOut = createAsyncThunk(
  'auth/sign-out',
  async (payload: string, {rejectWithValue}) => {
    const response: any = await logoutApi(payload);
    const {data, ok, status} = response;
    if (ok && status === StatusRequest.POST) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  },
);

export const selectAccessToken = (state: any) =>
  state.authState.data.accessToken;

export const selectRefreshToken = (state: any) =>
  state.authState.data.refreshToken;

export const selectErrorMessage = (state: any) => state.authState.errorMessage;

export const selectUserInfo = (state: any) => state.authState.data.user;

export const selectUserData = (state: any) => state.authState.data;

export const selectAuthData = (state: any) => state.authState;

export const {setDefault, setErrorMessage} = authStateSlice.actions;

export default authStateSlice.reducer;
