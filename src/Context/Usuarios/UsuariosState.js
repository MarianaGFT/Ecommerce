import React,{createContext,useReducer} from 'react'
import UsuariosReducer from './UsuariosReducer'
import clienteAxios from '../../config/clientesAxios'
import {LOGIN_ERROR,LOGIN_EXITO,CERRAR_SESION}from '../types'

const initialState={
    usuario:JSON.parse(localStorage.getItem('usuario')),
    autenticado:false,
}

export const usuariosContext=createContext(initialState)


export const  UsuariosState=({children})=> {
    const [state,dispatch]=useReducer(UsuariosReducer,initialState)

    async function loguearUsuario(usuario){
     try {
        const data= await clienteAxios.post('/api/v1/auth/login',usuario)
        dispatch({
            type:LOGIN_EXITO,
            payload:data.data
        })
         
     } catch (error) {
         console.log(error)
     }
    }
    function logOut(){
        dispatch({
            type:CERRAR_SESION
        })
    }
    return (
       <usuariosContext.Provider
       value={{
           usuario:state.usuario,
           autenticado:state.autenticado,
           loguearUsuario,
           logOut
       }}
       >
           {children}
       </usuariosContext.Provider>
    )
}


