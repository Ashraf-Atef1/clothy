import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartOpen: false,
    cartItems: [],
}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    SET_CART_ITEMS(state, {payload}) {
      state.cartItems = payload;
    },
    SET_IS_CART_OPEN(state, {payload}) {
      state.isCartOpen = payload;
    }
  }
}
)

export const {SET_CART_ITEMS, SET_IS_CART_OPEN} = cartSlice.actions;
export default cartSlice.reducer;
