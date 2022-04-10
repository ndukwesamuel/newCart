import React from "react";
import { useGlobalContext } from "../context/cart/CartContext";
import './Nav.css'

function Navbar() {
  const { cartItems , showHideCart } = useGlobalContext()

  console.log(cartItems.length);

  return (
    <nav>
    <div className='nav__left'>Store</div>
    <div className='nav__middle'>
      <div className='input__wrapper'>
        <input type='text' />
        <i className='fas fa-search' />
      </div>
    </div>
    <div className='nav__right'>
      <div className='cart__icon'>
        <i
          className='fa fa-shopping-cart'
          aria-hidden='true'
          onClick={showHideCart}
        />
        {cartItems.length > 0 && (
          <div className='item__count'>
            <span>{cartItems.length}</span>
          </div>
        )}
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
