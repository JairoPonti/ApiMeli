import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductos, siguientesProductos, anterioresProductos, siguientesProdFil, anterioresProdFil} from '../redux/searchDucks'
// import Footer from './Footer'
// import Slide from './Slide'



const Paginas = () => {

      const dispatch = useDispatch()

      var productos = useSelector(store => store.productos.array )
      console.log(productos)

      const prodFiltrados = useSelector(store => store.productos.resFiltrados)

      const value = useSelector(store => store.productos.value)
      console.log(value)

      var leyenda = <h3 style= {{textAlign: "center"}}>Tu búsqueda aparecerá aquí</h3>
      
    if (prodFiltrados.length > 0){
        productos= false
        leyenda= null 
    }
      

 return (

    <div>
    
    <div className="row">
    
        {/* <Slide currentProduct={this.props.p} /> */}
        {productos.length > 0 ? productos.map((e) =>

            <div className="col s13 m6 l4 " key={e.id}>
                <ProductCard
                    img={e.thumbnail}
                    title={e.title}
                    price={e.price}
                    condition={e.condition}
                    currentId={e.currency_id}
                    availableQuantity={e.available_quantity}
                    permalink={e.permalink}
                />
               
            </div>

        ) : leyenda
        }
        {productos.length > 0 ?
         <div>
         <button className="btn active yellow" onClick={() => dispatch(siguientesProductos(value))}>siguientes</button>
         <button className="btn active yellow" onClick={() => dispatch(anterioresProductos(value))}>anteriores</button>
         </div>
        : null}

</div> 
<div className="row">
{prodFiltrados.length > 0  ? prodFiltrados.map((e) =>

<div className="col s13 m6 l4 " key={e.id}>
    <ProductCard
        img={e.thumbnail}
        title={e.title}
        price={e.price}
        condition={e.condition}
        currentId={e.currency_id}
        availableQuantity={e.available_quantity}
        permalink={e.permalink}
    />
   
</div>

) : null}

{prodFiltrados.length > 0 ?

//  {productos} = false,
<div>
<button className="btn active yellow" onClick={() => dispatch(siguientesProdFil(value))}>siguientes</button>
<button className="btn active yellow" onClick={() => dispatch(anterioresProdFil(value))}>anteriores</button>
</div>
: null}

     </div> 
       {/* <Footer prodsPerPage={this.state.productPerPage} totalProds={this.props.p.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} /> */}
         </div>

        )
    }

    export default Paginas

