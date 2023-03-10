import {CartState, CartItem, UpdateQuantity} from '@/Types/cartType';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

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
