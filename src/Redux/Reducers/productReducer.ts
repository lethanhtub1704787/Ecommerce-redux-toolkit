import {StatusRequest} from '@/Contants';
// import {subjectLoading} from '@/Function/RxjsLoading';
import {getCategoryApi, getProductApi} from '@/Services/ProductApi';
import {CategoryState} from '@/Types/categoryType';
import {ProductDataState} from '@/Types/productType';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ProductDataState = {
  nextToken: '',
  items: [],
  category: [],
};

export const productStateSlice = createSlice({
  name: 'productState',
  initialState,
  reducers: {},
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
          currentState.nextToken = payload.nextToken;
          currentState.items = payload.items;
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

export const getProductData = createAsyncThunk('/product', async () => {
  const response: any = await getProductApi();
  console.log('responde', response);
  const {data, ok, status} = response;
  if (ok && status === StatusRequest.GET) {
    return data;
  }
});

export const getCategory = createAsyncThunk('/category', async () => {
  const response: any = await getCategoryApi();
  console.log('responde', response);
  const {data, ok, status} = response;
  if (ok && status === StatusRequest.GET) {
    return data;
  }
});

export const selectProduct = (state: any) => state.productState.items;
export const selectCategory = (state: any) => state.productState.category;

export const {} = productStateSlice.actions;

export default productStateSlice.reducer;
