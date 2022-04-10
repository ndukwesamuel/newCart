import React from 'react'
import { useGlobalContext } from '../context/cart/CartContext'
import { SHOW_HIDE_CART } from '../context/Types'
import CartItem from './CartItem'
import './Cart.css'




const CartCom = () => {
    const {showCart, addToCart,showHideCart,removeItem, cartItems }  = useGlobalContext()
    console.log(cartItems.length);

    
  return (
    <div>

        {showCart && (
            <div className='cart__wrapper'>
                <div style={{ textAlign: "right" }}>

                <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
                </div>    
                <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>  
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
                <div></div>

            
            <div style={{ marginLeft: 5 }}>
              {cartItems.reduce( (amount, item) => item.price +  amount , 0)}
                
            </div>
          </div>
             </div>
        )}
    </div>
  )
}

export default CartCom