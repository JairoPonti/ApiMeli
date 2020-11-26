import React, { useState, useEffect } from 'react';
import Paginas2 from './Paginas2'
import '../Button.css'
import {useSelector, useDispatch} from 'react-redux'
import {paraFiltrarUsados, paraFiltrarNuevos, paraFiltrarMayorP, paraFiltrarMenorP, obtenerProductos} from '../redux/searchDucks'


const Catalogo = () => {
	
	const value = useSelector(store => store.productos.value)
	console.log(value)
	const dispatch = useDispatch()
	const res = useSelector(store => store.productos.array ) 
	console.log(res)
	

	return (
		<div>
			<div className="row">
				<h5 style= {{display: "flex", justifyContent:"center"}}>Ordená los productos</h5>
				<br/>
				<div style= {{display: "flex", justifyContent:"center"}}>
				 <button type="submit" className="btn yellow button" onClick={() => dispatch(paraFiltrarMenorP(value))}>
						<i className="material-icons">attach_money</i>Menor a Mayor
				</button>
				
				<button type="submit" className="btn yellow button" onClick={() => dispatch(paraFiltrarMayorP(value))}>
						<i className="material-icons ">attach_money</i>Mayor a Menor
          			</button> 
					   <button type="submit" className="btn yellow button" onClick={() => dispatch(obtenerProductos(value))}>
					Todos
          			</button> 
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