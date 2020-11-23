import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
	return (
		<div className="card z-depth-2">
			<div className="row">
				<div className="card-image waves-block waves-light center-align" >
					<img src={props.img} alt="" className="activator center-align" />
				</div>
			</div>
			<div className="card-content grey-text">
				<p className="card-title truncate">{props.title}</p>
				<Link to="/" className="btn  waves-effect yellow" >
					<i className="activator">Ver más</i>
				</Link>
			</div>
			<div className="card-reveal">
				<p className="card-title">{props.title}</p>
				<h5>${props.price} {props.currentId}</h5>
				<p className="red-text darken-2">stock: {props.availableQuantity}</p>
				<p className="teal-text">Condición: {props.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
				<button type="submit" className="btn btn-primary left" onClick={() => window.location = `${props.permalink}`}>
					Ir a articulo
				            </button>
			</div>
		</div>
	)
}


export default ProductCard