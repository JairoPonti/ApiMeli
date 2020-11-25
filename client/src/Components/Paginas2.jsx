import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductos, siguientesProductos, anterioresProductos} from '../redux/searchDucks'
// import Footer from './Footer'
// import Slide from './Slide'



const Paginas = () => {

      const dispatch = useDispatch()

      const productos = useSelector(store => store.productos.array )
      console.log(productos)

      const prodFiltrados = useSelector(store => store.productos.resParaFiltrar)

      const value = useSelector(store => store.productos.value)
      console.log(value)
      
    
      

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

        ) : <h3 style= {{textAlign: "center"}}>Tu búsqueda aparecerá aquí</h3>
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
<div>
<button className="btn active yellow" onClick={() => dispatch(siguientesProductos(value))}>siguientes</button>
<button className="btn active yellow" onClick={() => dispatch(anterioresProductos(value))}>anteriores</button>
</div>
: null}

     </div> 
       {/* <Footer prodsPerPage={this.state.productPerPage} totalProds={this.props.p.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} /> */}
         </div>

        )
    }

    export default Paginas

