import React, { Component } from 'react'
import ProductCard from './ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductos, siguientesProductos} from '../redux/searchDucks'
// import Footer from './Footer'
// import Slide from './Slide'
import { CommonLoading } from 'react-loadingg';

const Paginas = () => {

      const dispatch = useDispatch()

      const productos = useSelector(store => store.productos.array.array )
      console.log(productos)

      const value = useSelector(store => store.productos.array.value)
      console.log(value)
    

 return (

    <div>
    
    <div className="row">
    
        {/* <Slide currentProduct={this.props.p} /> */}
        {productos ? productos.map((e) =>

            <div className="col s12 m6 l3 thiscard" key={e.id}>
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

        ) : <h3>Tu búsqueda aparecerá aquí</h3>
        }
        {productos ? <button onClick={() => dispatch(siguientesProductos())}>siguiente</button>
        : null}
     </div> 
       {/* <Footer prodsPerPage={this.state.productPerPage} totalProds={this.props.p.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} /> */}
         </div>

        )
    }

    export default Paginas

