import Home from './routes/home/home';
import {Routes,Route,Outlet} from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='auth' element={<Authentication/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
