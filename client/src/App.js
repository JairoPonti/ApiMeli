import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from './Components/Navbar.jsx';
import Catalogo from './Components/Catalogo.jsx';
import './App.css';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import Buscador from '../src/Components/Buscador'


class App extends Component {


  
  constructor() {
    super()
    this.state = {
      query: 'XZW'
    }
    
    this.onSearch = this.onSearch.bind(this)
  }
  
  onSearch(valor) {
    if (!valor) {
      valor = 'XZW'
    }
    if (!localStorage.getItem(`listado_${valor}`)) {
      fetch(`http://localhost:3003/api/search?q=${valor}`)
      .then((r) => r.json())
      .then((data) => {
        this.setState(data)
        // console.log(`NO EXISTE listado_${valor}`)
        localStorage.setItem(`listado_${valor}`, JSON.stringify(data)) // Seteo el item al estado, le asigno una key y despues seteo un obj a string
      })
      .catch((error) => {
        console.error(error);
      });
    } else {
      // console.log(`YA EXISTE listado_${valor}`)
      this.setState(JSON.parse(localStorage.getItem(`listado_${valor}`))) // Busco el item por su key, lo paso de string a obj y guardo
    }
  }
  
  componentDidMount() {
    this.onSearch(this.state.query)
  }
  
  render() {

    const store = generateStore()

    return (
      <Provider store= {store}>
      <Router>
      <Route exact path="/" component={Buscador} />
      <Route path="/" render={() => <Catalogo state={this.state} />} />
      </Router>
      </Provider>
    );
  }
}

export default App;
