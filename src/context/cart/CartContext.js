import React, { useState, useContext, useEffect, useReducer } from 'react'
import { ADD_TO_CART, REMOVE_ITEM, SHOW_HIDE_CART } from '../Types'
import CartReducer from './CartReducer';



const AppContext = React.createContext()

const initalState = {
    showCart: false,
    cartItems: [],
  };


const AppProvider =  ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initalState);

    const addToCart = (item) => {
        console.log('working');
        console.log(item);
        dispatch({ type: ADD_TO_CART, payload: item });
      };

      const showHideCart = () => {
        dispatch({ type: SHOW_HIDE_CART });
      };
    
      const removeItem = (id) => {
        console.log('testing');
        dispatch({ type: REMOVE_ITEM, payload: id });
      };



    return (
        <AppContext.Provider value={{
            ...state,
            addToCart,
            showHideCart,
            removeItem

        }}>
        {children}
      </AppContext.Provider>
    )

}





export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }
