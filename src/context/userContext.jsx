import { createContext,useEffect,useState } from "react";
import { OnAuthChanged } from "../config/config";

export const UserContext = createContext(null);

const UserContextProvider = ({children}) =>{
	  const [userData,setUserData] = useState(null);
	  useEffect(()=>{
		  OnAuthChanged((user) => setUserData(user));},[])
		
    return(<UserContext.Provider value={{userData:userData,setUserData:setUserData}}>{children}</UserContext.Provider>)
}
export default UserContextProvider