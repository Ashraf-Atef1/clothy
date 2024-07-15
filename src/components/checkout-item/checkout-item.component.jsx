import { cartItemsSelector } from '../../store/cart/cart.selector';
import { clearItemFromCartAction, addItemToCartAction, removeItemToCartAction } from '../../store/cart/cart.action';
import { useDispatch, useSelector} from 'react-redux';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);

  const clearItemFromCart = (cartItem)=> dispatch(clearItemFromCartAction(cartItems, cartItem));
  const addItemToCart = (cartItem)=> dispatch(addItemToCartAction(cartItems, cartItem));
  const removeItemToCart = (cartItem)=> dispatch(removeItemToCartAction(cartItems, cartItem));

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
