import {StatusRequest} from '@/Contants';
// import {subjectLoading} from '@/Function/RxjsLoading';
import {getCategoryApi, getProductApi} from '@/Services/ProductApi';
import {CategoryState} from '@/Types/categoryType';
import {ProductDataState} from '@/Types/productType';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState: ProductDataState = {
  items: [],
  category: [],
  favourites: [],
};

export const productStateSlice = createSlice({
  name: 'productState',
  initialState,
  reducers: {
    productFavourite: (
      state: ProductDataState,
      action: PayloadAction<string>,
    ) => {
      const productID = action.payload;
      if (state.favourites.includes(productID)) {
        const newFavourite = state.favourites.filter(
          item => item !== productID,
        );
        state.favourites = newFavourite;
      } else {
        state.favourites.push(productID);
      }
    },
  },
  extraReducers(builder: any) {
    builder
      /** GET PRODUCT */
      .addCase(getProductData.pending, () => {
        // subjectLoading.next(true);
      })
      .addCase(
        getProductData.fulfilled,
        (
          currentState: ProductDataState,
          {payload}: PayloadAction<ProductDataState>,
        ) => {
          currentState.items = payload.items;
          console.log('payload: ', payload);
          // subjectLoading.next(false);
        },
      )
      .addCase(getProductData.rejected, () => {
        // subjectLoading.next(false);
        console.log('>>>>> get product failure');
      })

      /* GET CATEGORY */
      .addCase(getCategory.pending, () => {})
      .addCase(
        getCategory.fulfilled,
        (
          currentState: ProductDataState,
          {payload}: PayloadAction<CategoryState>,
        ) => {
          currentState.category = payload.items;
        },
      )
      .addCase(getCategory.rejected, () => {
        console.log('>>>>> get category failure');
      });
  },
});

export const getProductData = createAsyncThunk(
  '/product',
  async (_, {getState, rejectWithValue}) => {
    const state = getState() as RootState;
    const response: any = await getProductApi(state.authState.data.accessToken);
    console.log('responde', response);
    const {data, ok, status} = response;
    if (ok && status === StatusRequest.GET) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  },
);

export const getCategory = createAsyncThunk(
  '/category',
  async (_, {getState, rejectWithValue}) => {
    const state = getState() as RootState;
    const response: any = await getCategoryApi(
      state.authState.data.accessToken,
    );
    console.log('responde', response);
    const {data, ok, status} = response;
    if (ok && status === StatusRequest.GET) {
      return data;
    } else {
      return rejectWithValue(data);
    }
  },
);

export const selectProduct = (state: any) => state.productState.items;
export const selectCategory = (state: any) => state.productState.category;
export const selectFavourites = (state: any) => state.productState.favourites;
export const {productFavourite} = productStateSlice.actions;

export default productStateSlice.reducer;
