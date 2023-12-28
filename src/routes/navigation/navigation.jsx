import {Outlet, Link} from 'react-router-dom';
import {Fragment, useContext} from 'react';
import "./navigation.scss"
import {ReactComponent as Logo} from "../../assets/logo.svg"
import { UserContext } from '../../App';
import { signOutUser } from '../../config/config';

function Navigation(){
  const {userData} = useContext(UserContext);
  return(<Fragment>
    <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            userData ?  <div onClick={signOutUser} className='nav-link'>SIGN OUT</div> :<Link className='nav-link' to='/auth'>SIGN IN</Link>
          }
        </div>
      </div>
    <Outlet/>
  </Fragment>)
}
export default Navigation;