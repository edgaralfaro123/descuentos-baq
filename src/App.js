//import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
      fetch("https://cuentasporcobrar.herokuapp.com/descuento/listar")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div class='row'>
        <div class='col-sm-12 pading'> </div>
        <div class='col-sm-2'></div>
        <div class='col-sm-8 '>
          <center><a class="display-4"><strong> En cuanto me queda?</strong></a></center>
          <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Que producto deseas comprar hoy?"></input>
        </div>
        <div class='col-sm-2'></div>
        <div class='col-sm-12 pading'> </div>
        <div class="card-deck-wrapper">
        <div class="card-deck">
          {items.map(item => (
          <div class='col-sm-3'>
            <div class="card" key={item.descripcion}>
              <img class="card-img-top" src={item.urlimagen} alt="Card image cap"/>
              <div class="card-img-overlay descuento">
                <a class="btn btn-sm btn-danger float-right"><strong>{item.descuento}%</strong></a>
              </div>           
              <div class="card-body">
                <h5 class="card-title">{item.descripcion}</h5>
                <div class="bottom-wrap">
                <a href="" class="btn btn-sm btn-primary float-right">Visitar</a>
                <div class="price-wrap h5">
					        <span class="price-new precioHoy">${item.precio}</span> <del class="price-old">${item.precioanterior}</del>
				        </div>
              </div>
              </div>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
