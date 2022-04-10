import React from 'react'
import { useGlobalContext } from '../context/cart/CartContext'


import './CartItem.css'


function CartItem({item}) {

  const  {removeItem} = useGlobalContext()
  return (
    <li className='CartItem__item' key={item._id}>
    <img src={item.image} alt='' />
    <div>
      {item.name}  {item.price} 
    </div>
    <button className='CartItem__button' onClick={() => removeItem(item._id)}>
      Remove
    </button>
  </li>
  )
}

export default CartItem