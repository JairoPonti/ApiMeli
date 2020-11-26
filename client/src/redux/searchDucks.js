import axios from 'axios'



//Constantes
const dataInicial = {
    array: [],
    resFiltrados: [],
    offset: 0,
    offsetFil: 0,
    value: [],
    interruptor: false
}

//Types
const OBTENER_PRODUCTOS    = 'OBTENER_PRODUCTOS'
const SIGUIENTES_PRODUCTOS = 'SIGUIENTES_PRODUCTOS'
const ANTERIORES_PRODUCTOS = 'ANTERIORES_PRODUCTOS'
const PARA_FILTRAR_USADOS  = 'PARA_FILTRAR_USADOS'
const PARA_FILTRAR_NUEVOS  = 'PARA_FILTRAR_NUEVOS'
const SIGUIENTES_PRODUCTOS_FILTRADOS = 'SIGUIENTES_PRODUCTOS_FILTRADOS'
const ANTERIORES_PRODUCTOS_FILTRADOS = 'ANTERIORES_PRODUCTOS_FILTRADOS' 
const PARA_FILTRAR_MENOR_PRECIO = 'PARA_FILTRAR_MENOR_PRECIO'
const PARA_FILTRAR_MAYOR_PRECIO = 'PARA_FILTRAR_MAYOR_PRECIO'

//Reducer
export default function searchReducer(state= dataInicial, action){
    switch(action.type){
    case OBTENER_PRODUCTOS:
        return {...state, array: action.payload, value: action.value, interruptor: true}
    case SIGUIENTES_PRODUCTOS:
        return {...state, array: action.payload.array, offset: action.payload.offset, value: action.payload.value}
        case SIGUIENTES_PRODUCTOS_FILTRADOS:
            return {...state, resFiltrados: action.payload.resFiltrados, offsetFil: action.payload.offset, value: action.payload.value}
    case ANTERIORES_PRODUCTOS:
        return {...state, array: action.payload.array, offset: action.payload.offset}
    case ANTERIORES_PRODUCTOS_FILTRADOS:
            return {...state, resFiltrados: action.payload.resFiltrados, offsetFil: action.payload.offset}
    case PARA_FILTRAR_USADOS:
        return {...state,  resFiltrados: action.payload, value: action.value, interruptor: false}
    case PARA_FILTRAR_NUEVOS:
         return {...state,  resFiltrados: action.payload, value: action.value, interruptor: false }
    case PARA_FILTRAR_MENOR_PRECIO:
        return {...state,  resFiltrados: action.payload, value: action.value, interruptor: false}
    case PARA_FILTRAR_MAYOR_PRECIO:
          return {...state,  resFiltrados: action.payload, value: action.value, interruptor: false}
        default:
            return state
        
    }
 
}



//::::: OBTENER PRODUCTOS
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

 //:::: SIGUIENTES Y ANTERIORES

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

//Ver nuevos
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

 //:::: SIGUIENTES Y ANTERIORES DE PROD FILTRADOS
 
 export const siguientesProdFil = ( valor) => async (dispatch, getState) => {
    
    
    // console.log('getState', getState().productos.limit)
   const offset = getState().productos.offsetFil
   const siguientes = offset + 30

 try {
      const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + valor + '&offset=' + siguientes + '&limit=30') // busqueda luego de q= + req.query.q + 

           dispatch({
            type:SIGUIENTES_PRODUCTOS_FILTRADOS,
            payload: {
                resFiltrados:res.data.results,
                offset: siguientes,
                value: valor
            }
       })
    } catch (error) {
        console.log(error)
    }
}


export const anterioresProdFil = ( value) => async (dispatch, getState) => {
    
    
    // console.log('getState', getState().productos.limit)
   const offset = getState().productos.offsetFil
   const anteriores = offset - 30

 try {
      const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + value + '&offset=' + anteriores + '&limit=30') // busqueda luego de q= + req.query.q + 

           dispatch({
            type:ANTERIORES_PRODUCTOS_FILTRADOS,
            payload: {
                resFiltrados:res.data.results,
                offset: anteriores
            }
       })
    } catch (error) {
        console.log(error)
    }
}

//FILTROS DE PRECIO ASC Y DESC

export const paraFiltrarMenorP = (valor) => async (dispatch, getState) => {

    try {
         const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + valor  ) // busqueda luego de q= + req.query.q + 
   
              dispatch({
               type:PARA_FILTRAR_MENOR_PRECIO,
               payload: res.data.results.sort(function(prev, next) { return prev.price - next.price }),
               value: valor
             
          })
       } catch (error) {
           console.log(error)
       }
   }

   export const paraFiltrarMayorP = (valor) => async (dispatch, getState) => {

    try {
         const res= await  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + valor  ) // busqueda luego de q= + req.query.q + 
   
              dispatch({
               type:PARA_FILTRAR_MAYOR_PRECIO,
               payload: res.data.results.sort(function(prev, next) { return next.price - prev.price }),
               value: valor
             
          })
       } catch (error) {
           console.log(error)
       }
   }


