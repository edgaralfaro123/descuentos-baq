//import React from 'react';
import React, { useState, useEffect,useRef  } from 'react';
import './App.css';
import Product from "./components/products";

const App = () => {
  const productRef = useRef();
  const [searchitems, setSearch] = useState([]);

  const buscarArticulos = async () => {
    let value=productRef.current.value;
    let url = `https://cuentasporcobrar.herokuapp.com/descuentos/producto/${value}`;
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result)=> {

      setSearch(result);
      console.log(result);
    })
    .catch((err)=>{
      console.error(err);
    })
  }

  return(
    <div className='row'>
      <div className='col-sm-12 pading'>
        <center><a className="display-4"><strong> En cuanto me queda?</strong></a></center>
        <input type="text" className="form-control" ref={productRef} aria-describedby="emailHelp" placeholder="Que producto deseas comprar hoy?"></input>
        <button className="btn btn-danger" onClick={buscarArticulos}>Buscar</button>
    </div>
      <div className="pt-5 justify-content-center justify-content-between">
        <Product items={searchitems}></Product>
      </div>
    </div>


  )


}

export default App;
