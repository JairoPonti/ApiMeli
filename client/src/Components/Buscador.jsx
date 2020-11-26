import React, { Component } from "react";
import { connect } from "react-redux";

import { obtenerProductos } from "../redux/searchDucks";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.obtenerProductos(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <nav className="row">
          <div className="blk col s8 push-s2">
            {" "}
            {/* Con esta clase hago que el buscador se centre y no ocupe toda la pantalla */}
            <div className="center-align">
              <div className="blk input-field col s12">
                <form
                  className="form-container"
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <div>
                    <input
                      type="text"
                      id="title"
                      autoComplete="off"
                      value={title}
                      onChange={(e) => this.handleChange(e)}
                      placeholder="Buscar productos, marcas y más..."
                      className="autocomplete center-align  white lighten-2 col l12 m12 s12"
                    />
                  </div>
                  <button type="submit" className="btn active cyan darken-3">
                    BUSCAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.array,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    obtenerProductos: (title) => dispatch(obtenerProductos(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
