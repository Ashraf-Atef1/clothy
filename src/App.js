import Home from './routes/home/home';
import {Routes,Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import UserContextProvider from './context/userContext';
import ProductsContextProvider from './context/productsContext';
import Shop from './routes/shop/shop';
import CartContextProvider from './context/cartContext';

function App() {

  return (
    <div className="App">
      <ProductsContextProvider>
      <UserContextProvider>
      <CartContextProvider>
      <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='auth' element={<Authentication/>}/>
      <Route path='shop' element={<Shop/>}/>
      </Route>
      </Routes>
      </CartContextProvider>
      </UserContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
