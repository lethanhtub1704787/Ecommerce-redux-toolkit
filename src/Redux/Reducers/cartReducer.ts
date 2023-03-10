import {StatusRequest} from '@/Contants';
import {subjectLoading} from '@/Function/RxjsLoading';
import {useAppSelector} from '@/Hooks/reduxHook';
import {addToCartApi, deleteCartItemApi, getCartApi} from '@/Services/CartApi';
import {
  CartType,
  CartState,
  CartItem,
  DeleteCartItem,
  UpdateQuantity,
  CartItemID,
  ProductOrder,
} from '@/Types/cartType';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductDataState} from '../../Types/productType';
import {RootState} from '../store';

const initialState: CartState = {
  CartItems: [],
};

export const cartStateSlice = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    setCartDefault: () => {
      return initialState;
    },
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      if (
        // Check if item already in cart
        state.CartItems.filter(item => item.id === action.payload.id).length > 0
      ) {
        // Find item index
        const itemIndex = state.CartItems.findIndex(
          item => item.id === action.payload.id,
        );
        // Update quantity (+1)
        state.CartItems[itemIndex].quantity += 1;
        // console.log('quantity updated: ', state.CartItems);
      } else {
        // Else => Push new item
        state.CartItems.push(action.payload);
        // console.log('cart updated: ', state.CartItems);
      }
    },
    updateQuantity: (
      state: CartState,
      action: PayloadAction<UpdateQuantity>,
    ) => {
      let itemIndex = state.CartItems.findIndex(
        item => item.id === action.payload.cartItemID,
      );
      state.CartItems[itemIndex].quantity = action.payload.value;
    },
    deleteItem: (state: CartState, action: PayloadAction<string>) => {
      let itemIndex = state.CartItems.findIndex(
        item => item.id === action.payload,
      );
      console.log('index: ', itemIndex);
      state.CartItems.splice(itemIndex, 1);
    },
  },
  extraReducers(builder: any) {
    builder;
  },
});

export const selectCart = (state: any) => state.cartState.CartItems;

export const {setCartDefault, updateQuantity, addToCart, deleteItem} =
  cartStateSlice.actions;

export default cartStateSlice.reducer;
