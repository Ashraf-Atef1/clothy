import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import {cartCountSelector, isCartOpenSelector} from '../../store/cart/cart.selector'
import {setIsCartOpenAction} from '../../store/cart/cart.action'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(isCartOpenSelector);
  const setIsCartOpen = (newState) => dispatch(setIsCartOpenAction(newState));
  const cartCount = useSelector(cartCountSelector);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
