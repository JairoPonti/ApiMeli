import React, { useState, useEffect } from 'react';
import Paginas2 from './Paginas2'
import '../Button.css'
import {useSelector, useDispatch} from 'react-redux'
import {paraFiltrarUsados, paraFiltrarNuevos} from '../redux/searchDucks'
// import '../Body.css'

const Catalogo = () => {
	
	const value = useSelector(store => store.productos.value)
	console.log(value)
	const dispatch = useDispatch()
	const res = useSelector(store => store.productos.array ) //store.productos.array[0].condition
	console.log(res)
	const resFiltrados = useSelector(store => store.productos.resFiltrados)



	// const sort = (term) => {
    //     switch (term) {
          
            // case 'priceAsc':
            //     dispatch(actionSetLocalResult([]))
            //     dispatch(actionSetLocalResult(result.sort((a, b) => {
            //         return a.price - b.price
            //     })))
            //     return ""
            // case 'pricedesc':
            //     dispatch(actionSetLocalResult([]))
            //     dispatch(actionSetLocalResult(result.sort((a, b) => {
            //         return b.price - a.price
            //     })))
			//     return ""
			

    //         case 'nuevo':
    //             dispatch(actionFilterResult([]))
    //             dispatch(actionFilterResult(res.filter(product => product.condition === "nuevo")))
    //             return ""
    //         case 'usado':
    //             dispatch(actionFilterResult([]))
    //             dispatch(actionFilterResult(res.filter(product => product.condition === "usado")))
    //             return ""
    //         default:
    //             return undefined
    //     }
    // }

	return (
		<div
		//  className= "background" 
		 >
			<div className="row">
				<h5 style= {{display: "flex", justifyContent:"center"}}>Ordená los productos</h5>
				<br/>
				<div style= {{display: "flex", justifyContent:"center"}}>
				{/* <button type="submit" className="btn yellow button" onClick={() => {sort('pricedesc') }}>
						<i className="material-icons">attach_money</i>Menor a Mayor
				</button>
				
				<button type="submit" className="btn yellow button" onClick={() => {sort('priceAsc') }}>
						<i className="material-icons ">attach_money</i>Mayor a Menor
          			</button> */}
					  {/* <button type="submit" className="btn yellow button" onClick={() => {sort('priceAsc') }}>
					Todos
          			</button> */}
				<button type="submit" className="btn yellow button"
			       onClick={() => dispatch(paraFiltrarNuevos(value))}>
					Nuevos
          			</button>
				<button type="submit" className="btn yellow button"
				onClick={() => dispatch(paraFiltrarUsados(value))}>
					Usados
          			</button>
					  </div>
			</div>
			<div className="row">
				<div >
				
				</div>
			</div>
			<div className="content">
				<div className="row">
				{res ? <Paginas2 p={res.results} /> : null}
				</div>
			</div>
		</div >
	)
}

export default Catalogo;