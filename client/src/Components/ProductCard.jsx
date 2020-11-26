import React from 'react';


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
			</div>
			<br/>
			<div>
				<h6 style={{textAlign:"center"}}>${props.price} {props.currentId}</h6>
				<h6 style={{textAlign:"center", color:"red"}}>stock: {props.availableQuantity} Condición: {props.condition === 'new' ? 'Nuevo' : 'Usado'}</h6>
				</div>
		</div>
	)
}


export default ProductCard