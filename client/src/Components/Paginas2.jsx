import React, { Component } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerProductos,
  siguientesProductos,
  anterioresProductos,
  siguientesProdFil,
  anterioresProdFil,
} from "../redux/searchDucks";
import Footer from "./Footer";

const Paginas = () => {
  const dispatch = useDispatch();

  var productos = useSelector((store) => store.productos.array);
  console.log(productos);

  var interruptor = useSelector((store) => store.productos.interruptor);
  console.log(productos);

  const prodFiltrados = useSelector((store) => store.productos.resFiltrados);

  const value = useSelector((store) => store.productos.value);
  console.log(value);

  var leyenda = (
    <h3 style={{ textAlign: "center", marginTop: "140px" }}>
      Tu búsqueda aparecerá aquí
    </h3>
  );

  if (prodFiltrados.length > 0 && interruptor === false) {
    productos = false;
    leyenda = null;
  }

  return (
    <div>
      <div className="row">
        {productos.length > 0
          ? productos.map((e) => (
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
            ))
          : leyenda}
        {productos.length > 0 ? (
          <div style={{ textAlign: "center" }}>
            <button
              className="btn active yellow"
              onClick={() => dispatch(siguientesProductos(value))}
            >
              siguientes
            </button>
            <button
              className="btn active yellow"
              onClick={() => dispatch(anterioresProductos(value))}
            >
              anteriores
            </button>
          </div>
        ) : null}
      </div>

      <div className="row">
        {prodFiltrados.length > 0
          ? prodFiltrados.map((e) => (
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
            ))
          : null}

        {prodFiltrados.length > 0 ? (
          <div style={{ textAlign: "center" }}>
            <button
              className="btn active yellow"
              onClick={() => dispatch(siguientesProdFil(value))}
            >
              siguientes
            </button>
            <button
              className="btn active yellow"
              onClick={() => dispatch(anterioresProdFil(value))}
            >
              anteriores
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Paginas;
