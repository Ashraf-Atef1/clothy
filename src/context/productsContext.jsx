import { useState,createContext } from "react";
import productsList from "../res/shop-data.json"

export const ProductContext = createContext([]);

const ProductsContextProvider = ({children})=>{
	const [products,setProducts] = useState(productsList);
	return(<ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>)
}
export default ProductsContextProvider;