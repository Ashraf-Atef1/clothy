import React from 'react';

import Button from '../authentication/button/button';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';

const CartDropdown = () => {
  const {cartItmes} =  useContext(CartContext)

  console.log("from drop",cartItmes)
  return(
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
    {cartItmes.map((item) => (<CartItem cartItem={item}/>))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
  )
  }

export default CartDropdown;
