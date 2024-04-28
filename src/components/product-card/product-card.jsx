import './product-card.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import Button from '../authentication/button/button';

function addItem(oldItems, newItem) {
  const oldItem = oldItems.find(item => item.id == newItem.id)
  
  if(oldItem){
    oldItem.quantity++ 
  }else{
    oldItems = [...oldItems, {...newItem, quantity: 1}]
  }
  return [...oldItems]
}
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {cartItmes, setCartItmes} =  useContext(CartContext)
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick={()=>setCartItmes(addItem(cartItmes, product))} buttonType='inverted'>Add to card</Button>
    </div>
  );
};

export default ProductCard;