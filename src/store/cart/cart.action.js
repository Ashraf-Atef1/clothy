import { createAction } from '../../utils/actions/createAction';
import { SET_CART_ITEMS, SET_IS_CART_OPEN } from './cart.reducer';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpenAction = (isOpen) =>
    SET_IS_CART_OPEN(isOpen);

export const addItemToCartAction = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return SET_CART_ITEMS(newCartItems);
};

export const removeItemToCartAction = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return SET_CART_ITEMS(newCartItems);
};

export const clearItemFromCartAction = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return SET_CART_ITEMS(newCartItems);
};
