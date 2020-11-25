import axios from 'axios'



//Constantes
const dataInicial = {
    array: [],
    resParaFiltrar: [],
    offset: 0,
    value: []
}

//Types
const OBTENER_PRODUCTOS    = 'OBTENER_PRODUCTOS'
const SIGUIENTES_PRODUCTOS = 'SIGUIENTES_PRODUCTOS'
const ANTERIORES_PRODUCTOS = 'ANTERIORES_PRODUCTOS'
const PARA_FILTRAR_USADOS  = 'PARA_FILTRAR_USADOS'
const PARA_FILTRAR_NUEVOS  = 'PARA_FILTRAR_NUEVOS'  

//Reducer
export default function searchReducer(state= dataInicial, action){
    switch(action.type){
    case OBTENER_PRODUCTOS:
        return {...state, array: action.payload, value: action.value}
    case SIGUIENTES_PRODUCTOS:
        return {...state, array: action.payload.array, offset: action.payload.offset, value: action.payload.value}
    case ANTERIORES_PRODUCTOS:
        return {...state, array: action.payload.array, offset: action.payload.offset}
    case PARA_FILTRAR_USADOS:
        return {...state,  resParaFiltrar: action.payload, value: action.value}
    case PARA_FILTRAR_NUEVOS:
         return {...state,  resParaFiltrar: action.payload, value: action.value}

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
            payload: res.data.results,
            value: valor
          
       })
    } catch (error) {
        console.log(error)
    }
}

export const siguientesProductos = ( valor) => async (dispatch, getState) => {
    
    
    // console.log('getState', getState().productos.limit)
   const offset = getState().productos.offset
   const siguientes = offset + 30

 try {
      const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + valor + '&offset=' + siguientes + '&limit=30') // busqueda luego de q= + req.query.q + 

           dispatch({
            type:SIGUIENTES_PRODUCTOS,
            payload: {
                array:res.data.results,
                offset: siguientes,
                value: valor
            }
       })
    } catch (error) {
        console.log(error)
    }
}

//::::::PRUEBA PARA BOTÓN DE PAG ANTERIOR
export const anterioresProductos = ( value) => async (dispatch, getState) => {
    
    
    // console.log('getState', getState().productos.limit)
   const offset = getState().productos.offset
   const anteriores = offset - 30

 try {
      const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + value + '&offset=' + anteriores + '&limit=30') // busqueda luego de q= + req.query.q + 

           dispatch({
            type:ANTERIORES_PRODUCTOS,
            payload: {
                array:res.data.results,
                offset: anteriores
            }
       })
    } catch (error) {
        console.log(error)
    }
}

//Ver usados
export const paraFiltrarUsados = (valor) => async (dispatch, getState) => {

   try {
         const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + valor  ) // busqueda luego de q= + req.query.q + 
   
              dispatch({
               type:PARA_FILTRAR_USADOS,
               payload: res.data.results.filter(producto => producto.condition === 'used'),
               value: valor
             
          })
       } catch (error) {
           console.log(error)
       }
   }

//    Ver nuevos
   export const paraFiltrarNuevos = (valor) => async (dispatch, getState) => {

    try {
         const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + valor  ) // busqueda luego de q= + req.query.q + 
   
              dispatch({
               type:PARA_FILTRAR_NUEVOS,
               payload: res.data.results.filter(producto => producto.condition === 'new'),
               value: valor
             
          })
       } catch (error) {
           console.log(error)
       }
   }


//Prueba nuevas funciones
//::::::REVISAR ME TIRA ERROR, NO ENTIENDO 
// export const actionFilterResult = (res) => {
//     return (dispatch) => {
//         dispatch({type: SEARCH_RESULT_FILTERED, payload: res})
//      }
// }

export function filtrarRes(payload) {
    return { type: "FILTRADO", payload };
  }