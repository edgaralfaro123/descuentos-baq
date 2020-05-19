//import React from 'react';
import React, { useState, useEffect,useRef  } from 'react';
import './App.css';

function App() {
  const productRef = useRef();
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
        // Nota: es| importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

//function buscarArticulos(){
const buscarArticulos = async () => {
  //productRef.current.focus();
  let value=productRef.current.value;

  let url = `https://cuentasporcobrar.herokuapp.com/descuento/${value}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();

  if(data.result.length === 0){
    //arroja un error si no coinciden los datos
    console.log(`arroja un error si no coinciden los datos`);
    // si vienen datos en la respuesta
  } else {
    console.log(`No se encontro ningun datos relacionado con la busqueda.`);
/*       Swal.fire({
          title: 'Advertencia!',
          text: 'No se encontro ningun datos relacionado con la busqueda',
          icon: 'info',
          timer: 1000,
          timerProgressBar: true,
      }); */
  }
}

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='row'>
        <div className='col-sm-12 pading'> </div>
        <div className='col-sm-2'></div>
        <div className='col-sm-6 '>
          <center><a className="display-4"><strong> En cuanto me queda?</strong></a></center>
          <input type="text" className="form-control" ref={productRef} aria-describedby="emailHelp" placeholder="Que producto deseas comprar hoy?"></input>
        </div>
        <div className='col-sm-2'>
          <button className="btn btn-danger" onClick={buscarArticulos}>Buscar</button>
        </div>
        <div className='col-sm-2'></div>
        <div className='col-sm-12 pading'> </div>
        <div className="card-deck-wrapper">
        <div className="card-deck">
          {items.map(item => (
          <div className='col-sm-3'>
            <div className="card" key={item.codigo}>
              <img className="card-img-top" src={item.urlimagen} alt="Card image cap"/>
              <div className="card-img-overlay descuento">
                <a className="btn btn-sm btn-danger float-right"><strong>{item.descuento}%</strong></a>
              </div>           
              <div className="card-body">
                <h5 className="card-title">{item.descripcion}</h5>
                <div className="bottom-wrap">
                <a href="" className="btn btn-sm btn-primary float-right">Visitar</a>
                <div className="price-wrap h5">
                  <span className="price-new precioHoy">${item.precio}</span> <del className="price-old">${item.precioanterior}</del>
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
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
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
