import{LOGIN_ERROR,LOGIN_EXITO,REGISTRO_ERROR,REGISTRO_EXITO,CERRAR_SESION} from '../types'

export default (state,action)=>{

    switch(action.type){
        case LOGIN_EXITO:
            localStorage.setItem('usuario',JSON.stringify(action.payload))
            return{
                ...state,
                autenticado:true
            }
        case CERRAR_SESION:
            localStorage.removeItem('usuario')
            return{
                ...state,
                autenticado:false
            }
         default:
            return state
    }
}