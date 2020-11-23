import React, { useState, useEffect } from 'react';
import Paginas2 from './Paginas2'
import '../Button.css'
// import '../Body.css'

function Catalogo(props) {
	const [ord, setOrd] = useState({})

	useEffect(() => {
		Promise.resolve(props.state)
			.then(() => setOrd(props.state))
	}, [props.state])


	function sortByPriceAsc() {
		if (ord.results) {
			setOrd({
				...ord,
				results: ord.results.sort((a, b) => (a.price > b.price) ? 1 : -1)
			})
		}
	}
	function sortByPriceDesc() {
		if (ord.results) {
			setOrd({
				...ord,
				results: ord.results.sort((a, b) => (b.price > a.price) ? 1 : -1)
			})
		}
	}

	function filterByCondition(condition) {
		if (condition === 'nuevo') {
			setOrd({
				...ord,
				results: props.state.results.filter((e) => e.condition === "new")
			})
		}
		if (condition === 'usado') {
			setOrd({
				...ord,
				results: props.state.results.filter((e) => e.condition !== "used")
			})
		}
		if (condition === 'todos') {
			setOrd({
				...ord,
				results: props.state.results
			})
		}
	}

	return (
		<div
		//  className= "background" 
		 >
			<div className="row">
				<h5 style= {{display: "flex", justifyContent:"center"}}>Ordená los productos</h5>
				<br/>
				<div style= {{display: "flex", justifyContent:"center"}}>
				<button type="submit" className="btn yellow button" onClick={() => sortByPriceAsc()}>
						<i className="material-icons">attach_money</i>Menor a Mayor
				</button>
				
				<button type="submit" className="btn yellow button" onClick={() => sortByPriceDesc()}>
						<i className="material-icons ">attach_money</i>Mayor a Menor
          			</button>
					  <button type="submit" className="btn yellow button" onClick={() => filterByCondition('todos')}>
					Todos
          			</button>
				<button type="submit" className="btn yellow button" onClick={() => filterByCondition('nuevo')}>
					Nuevos
          			</button>
				<button type="submit" className="btn yellow button" onClick={() => filterByCondition('usado')}>
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
					{ord.results ? <Paginas2 p={ord.results} /> : null}
				</div>
			</div>
		</div >
	)
}

export default Catalogo;