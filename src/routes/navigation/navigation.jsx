import {Outlet, Link} from 'react-router-dom';
import {Fragment, useContext} from 'react';
import "./navigation.scss"
import {ReactComponent as Logo} from "../../assets/logo.svg"
import { UserContext } from '../../context/userContext';
import { signOutUser } from '../../config/config';
import { CartContext } from '../../context/cartContext';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import CartIcon from '../../components/cart-icon/cart-icon';

function Navigation(){
  const {userData} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
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
        <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
    <Outlet/>
  </Fragment>)
}
export default Navigation;