import axios from 'axios'



//Constantes
const dataInicial = {
    array: [],
    offset: 0,
    value: ""
}

//Types
const OBTENER_PRODUCTOS = 'OBTENER_PRODUCTOS'
const SIGUIENTES_PRODUCTOS = 'SIGUIENTES_PRODUCTOS'


//Reducer
export default function searchReducer(state= dataInicial, action){
    switch(action.type){
    case OBTENER_PRODUCTOS:
        return {...state, array: action.payload}
    case SIGUIENTES_PRODUCTOS:
        return {...state, array: action.payload.array, offset: action.payload.offset}
        default:
            return state
        
    }
 
}


//Acciones
// export function obtenerProductos (valor)  {
//     return function(dispatch) {
//        return  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + valor + '&limit=30') // busqueda luego de q= + req.query.q + 
      
//        .then(res=>{
//            dispatch({
//             type:OBTENER_PRODUCTOS,
//             payload: res.data.results})
//        });
//     };
// };
    
//Prueba
export const obtenerProductos = (valor) => async (dispatch, getState) => {

  

 try {
      const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + valor + '&limit=30' ) // busqueda luego de q= + req.query.q + 

           dispatch({
            type:OBTENER_PRODUCTOS,
            payload: { 
            array: res.data.results,
            value: valor
         }  
       })
    } catch (error) {
        console.log(error)
    }
}

export const siguientesProductos = ( value) => async (dispatch, getState) => {
    
    
    // console.log('getState', getState().productos.limit)
   const offset = getState().productos.offset
   const siguientes = offset + 30

 try {
      const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + value + '&offset=' + siguientes + '&limit=30') // busqueda luego de q= + req.query.q + 

           dispatch({
            type:SIGUIENTES_PRODUCTOS,
            payload: {
                array:res.data.results,
                offset: siguientes
            }
       })
    } catch (error) {
        console.log(error)
    }
}
