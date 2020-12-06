import {OBTENERDETALLES,OBTENERPRODUCTOS} from '../types';

export default (state,action)=>{

    switch(action.type){
        case OBTENERPRODUCTOS:
            return{
                ...state,
                productos:action.payload,
                loading:false
            }
        case OBTENERDETALLES:{
            return{
                ...state,
                producto:action.payload,
                loading:false
            }
        }
        default:
            return state;
    }
}