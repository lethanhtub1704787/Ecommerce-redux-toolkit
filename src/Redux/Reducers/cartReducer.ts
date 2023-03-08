import {StatusRequest} from '@/Contants';
import {subjectLoading} from '@/Function/RxjsLoading';
import {addToCartApi, deleteCartItemApi, getCartApi} from '@/Services/CartApi';
import {
  CartType,
  CartState,
  CartItem,
  DeleteCartItem,
  UpdateQuantity,
} from '@/Types/cartType';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState: CartState = {
  cart: <CartType>{},
  items: [],
};

export const cartStateSlice = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    setCartDefault: () => {
      return initialState;
    },
    itemIncrement: (
      state: CartState,
      action: PayloadAction<UpdateQuantity>,
    ) => {
      let itemIndex = state.cart.products.findIndex(
        item => item.productId === action.payload.productId,
      );
      state.cart.products[itemIndex].quantity = action.payload.value;
    },
    itemDecrement: (state: CartState, action: PayloadAction<string>) => {
      let itemIndex = state.cart.products.findIndex(
        item => item.productId === action.payload,
      );
      state.cart.products[itemIndex].quantity -= 1;
    },
  },
  extraReducers(builder: any) {
    builder;
    /** GET CART */
    // .addCase(getCart.pending, () => {
    //   // subjectLoading.next(true);
    // })
    // .addCase(
    //   getCart.fulfilled,
    //   (currentState: CartState, {payload}: PayloadAction<any>) => {
    //     currentState.cart = payload;
    //     // subjectLoading.next(false);
    //   },
    // )
    // .addCase(getCart.rejected, () => {
    //   // subjectLoading.next(false);
    //   console.log('>>>>> get cart failure');
    // })

    // /** ADD TO CART */
    // .addCase(addToCart.pending, () => {
    //   subjectLoading.next(true);
    // })
    // .addCase(
    //   addToCart.fulfilled,
    //   (currentState: CartState, {payload}: PayloadAction<any>) => {
    //     currentState.cart = payload;
    //     subjectLoading.next(false);
    //   },
    // )
    // .addCase(addToCart.rejected, () => {
    //   subjectLoading.next(false);
    //   console.log('>>>>> get cart failure');
    // })
    // /** DELETE CART ITEM */

    // .addCase(deleteCartItem.pending, () => {
    //   // subjectLoading.next(true);
    // })
    // .addCase(
    //   deleteCartItem.fulfilled,
    //   (currentState: CartState, {payload}: PayloadAction<CartType>) => {
    //     currentState.cart = payload;
    //     console.log('deleted: ', currentState.cart);
    //   },
    // )
    // .addCase(deleteCartItem.rejected, () => {
    //   // subjectLoading.next(false);
    //   console.log('>>>>> delete cart item failure');
    // });
  },
});

/* ###### Temporarily ignore this API call . Using local storage (redux state and async storage Persist) ######*/
// export const getCart = createAsyncThunk(
//   '/cart',
//   async (payload: string, {rejectWithValue}) => {
//     const response: any = await getCartApi(payload);
//     const {data, ok, status} = response;
//     if (ok && status === StatusRequest.GET) {
//       return data;
//     } else {
//       return rejectWithValue(data);
//     }
//   },
// );

// export const addToCart = createAsyncThunk(
//   '/cart/product',
//   async (payload: any, {rejectWithValue}) => {
//     const response: any = await addToCartApi(payload);
//     const {data, ok, status} = response;
//     if (ok && status === StatusRequest.POST) {
//       return data;
//     } else {
//       return rejectWithValue(data);
//     }
//   },
// );

// export const deleteCartItem = createAsyncThunk(
//   '/cart/product/deleteItem',
//   async (payload: string, {getState, rejectWithValue}) => {
//     const state = getState() as RootState;
//     const response: any = await deleteCartItemApi(
//       state.authState?.data?.accessToken,
//       payload,
//     );
//     const {data, ok, status} = response;
//     if (ok && status === StatusRequest.DELETE) {
//       return data;
//     } else {
//       return rejectWithValue(data);
//     }
//   },
// );

export const selectCart = (state: any) => state.cartState.cart;
export const selectCartItems = (state: any) => state.cartState.cart.products;

export const {setCartDefault, itemIncrement, itemDecrement, testIncrement} =
  cartStateSlice.actions;

export default cartStateSlice.reducer;
