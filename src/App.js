import { createContext, useEffect, useState } from 'react';
import Home from './routes/home/home';
import {Routes,Route,Outlet} from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import {OnAuthChanged} from './config/config'
import { onAuthStateChanged } from 'firebase/auth';

export const UserContext = createContext(null);
function App() {
  const [userData,setUserData] = useState();
  const updateUserData = (user) =>{
    setUserData(user);
  }
  useEffect(()=>{
    OnAuthChanged(updateUserData);
  },[])
  const UserContextProvider = ({children}) =>{
    return(<UserContext.Provider value={{userData:userData,setUserData:setUserData}}>{children}</UserContext.Provider>)
  }
  return (
    <div className="App">
      <UserContextProvider>
      <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='auth' element={<Authentication/>}/>
      </Route>
      </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
