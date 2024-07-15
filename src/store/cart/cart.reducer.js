import {cartTypes} from './cart.types'

const InitState = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state = InitState, action = {}) => {
  const {type, payload} = action;
  switch(type) {
    case cartTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      }
    case cartTypes.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      return state;
  }
}
