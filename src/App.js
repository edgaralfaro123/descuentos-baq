//import React from 'react';
import React, { useState, useEffect,useRef  } from 'react';
import './App.css';
import Product from "./components/products";
import Header from "./components/header";

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
    <div>
      <Header productRef={productRef}></Header>
      <div className="pt-5 justify-content-center justify-content-between">
        <Product items={searchitems}></Product>
      </div>
    </div>
  )


}

export default App;
