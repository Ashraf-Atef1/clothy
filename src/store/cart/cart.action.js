import { createAction } from '../../utils/actions/createAction';
import { cartTypes } from './cart.types';

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
    createAction(cartTypes.SET_IS_CART_OPEN, isOpen);

export const addItemToCartAction = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction( cartTypes.SET_CART_ITEMS , newCartItems);
};

export const removeItemToCartAction = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction( cartTypes.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCartAction = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction( cartTypes.SET_CART_ITEMS, newCartItems);
};
