//import React from 'react';
import React, { useState, useEffect,useRef  } from 'react';
import './App.css';
import Product from "./components/products";
import Header from "./components/header";
import Api from "./api";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const {ProductApi}=Api

  useEffect(() => {
    const {buscarProductos}=ProductApi;
    buscarProductos()
    .then((res)=>{
      setIsLoaded(true);
      setItems(res);
    })
    .catch((res)=>{
      setIsLoaded(true);
      setError(error);
    });
  }, [])

  const buscarArticulos = async (value) => {
    console.log(value);
      let url = `https://cuentasporcobrar.herokuapp.com/descuentos/producto/${value}`;
      fetch(url)
      .then((response) => {
          return response.json();
      })
      .then((result)=> {
        console.log(result);
        setItems(result);
      })
      .catch((err)=>{
          console.error(err);
      })
  }
  return(
    <div>
      <Header buscar={buscarArticulos}></Header>
      <div className="pt-5 justify-content-center justify-content-between">
      <Product items={items}></Product>
      </div>
    </div>
  )


}

export default App;
