import React,{createContext,useReducer,useEffect} from 'react'
import CarritoReducer from '../Carrito/CarritoReducer'
import clienteAxios from '../../config/clientesAxios'
import {CART_ADD_ITEM,CART_REMOVE_ITEM} from '../types'

const cartItemsStorage= localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]
const initialState={
    cartItems:cartItemsStorage
}
export const carritoContext=createContext(initialState)

export const CarritoState=({children})=>{
   const [state,dispatch]=useReducer(CarritoReducer,initialState)

   useEffect(() => {
    localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
    console.log('changed')
   }, [state.cartItems])

   function agregarItem(producto){
   
    
       dispatch({
           type:CART_ADD_ITEM,
           payload:producto
       })
   }
   function eliminarItem({id}){
       dispatch({
           type:CART_REMOVE_ITEM,
           payload:id
       })
   }

   return(
       <carritoContext.Provider
       value={{
           cartItems:state.cartItems,
           eliminarItem,
           agregarItem
       }}
       >
           {children}
       </carritoContext.Provider>
   )
}