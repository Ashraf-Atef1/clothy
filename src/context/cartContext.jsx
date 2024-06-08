import { createContext,useState, useEffect } from "react";

function addCartItem(cartItems, cartItemToAdd) {
	const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
	
	if (existingCartItem) {
	  return cartItems.map(item =>
		item.id === cartItemToAdd.id
		  ? { ...item, quantity: item.quantity + 1 }
		  : item
	  );
	}else{
		return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
	}
}

function removeCartItem(cartItems, cartItemToRemove) {
	const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);
	
	if (existingCartItem.quantity === 1) {
	  return cartItems.filter(item => item.id !== cartItemToRemove.id);
	}
	
	return cartItems.map(item =>
	  item.id === cartItemToRemove.id
		? { ...item, quantity: item.quantity - 1 }
		: item
	);
}
function clearCartItem(cartItems, cartItemToClear) {
	return cartItems.filter(item => item.id !== cartItemToClear.id);
  }

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
  });

const CartContextProvider = ({children}) =>{
	const [isCartOpen,setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(()=>{
		let count = 0;
		cartItems.forEach(item=>{
			count += item.quantity;
		});
		setCartCount(count);
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		  );
		setCartTotal(newCartTotal);
	},[cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	  };
	
	  const removeItemToCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	  };
	
	  const clearItemFromCart = (cartItemToClear) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	  };

    return(<CartContext.Provider value={{isCartOpen, setIsCartOpen,
										cartItems, setCartItems,
										addItemToCart, removeItemToCart,
    									clearItemFromCart, cartCount, 
										setCartCount, cartTotal}}>{children}</CartContext.Provider>)
}
export default CartContextProvider
