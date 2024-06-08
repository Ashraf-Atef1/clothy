import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../authentication/button/button';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';

const CartDropdown = () => {
  const {cartItems} =  useContext(CartContext)

  console.log("from drop",cartItems)
  return(
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
    {cartItems.map((item) => (<CartItem cartItem={item} key={item.id}/>))}
    </div>
    <Button><Link to="/checkout">GO TO CHECKOUT</Link></Button>
  </div>
  )
  }

export default CartDropdown;
