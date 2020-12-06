import React,{useReducer,createContext} from 'react'
import ProductosReducer from './ProductosReducer'
import clienteAxios from '../../config/clientesAxios'
import {OBTENERDETALLES,OBTENERPRODUCTOS} from '../types'

//Declaración del state inicial
const initialState={
    productos:[],
    producto:{},
    loading:true
}
//Creación del contexto del state
export const productosContext= createContext(initialState)

export const  ProductosState=({children})=>{

    const [state,dispatch]=useReducer(ProductosReducer,initialState)

    async  function obtenerProductos(){
        try {
            const data= await clienteAxios.get('/api/v1/products')
            console.log(data);
            dispatch({
                type:OBTENERPRODUCTOS,
                payload:data.data.data
            })
       
        } catch (error) {
            console.log(error)
        }
    }
    async  function obtenerProducto(id){
        try {
            const data= await clienteAxios.get(`/api/v1/products/${id}`)
            console.log(data);
            dispatch({
                type:OBTENERDETALLES,
                payload:data.data.data
            })
       
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <productosContext.Provider
        value={{
            productos:state.productos,
            obtenerProductos,
            producto:state.producto,
            obtenerProducto,
            loading:state.loading
        }}
        >
            {children}
        </productosContext.Provider>
    )
}


