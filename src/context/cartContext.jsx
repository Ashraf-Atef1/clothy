import { createContext,useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({children}) =>{
	const [isCartOpen,setIsCartOpen] = useState(false);
	const [cartItmes, setCartItmes] = useState([])
    return(<CartContext.Provider value={{isCartOpen, setIsCartOpen, cartItmes, setCartItmes}}>{children}</CartContext.Provider>)
}
export default CartContextProvider