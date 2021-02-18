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
    const {buscarProductosParams}=ProductApi;
    buscarProductosParams(value)
    .then((res)=>{
      setIsLoaded(true);
      setItems(res);
    })
    .catch((res)=>{
      setIsLoaded(true);
      setError(error);
    });
  }
  return(
    <div  >
      <Header buscar={buscarArticulos}></Header>
      <div className="pt-5 justify-content-center justify-content-between"  style={{backgroundColor: '#5b4f6c'}}>
      <h1> </h1>
      <h1> </h1>
      <h1> </h1>
      <h1> </h1>
      
      <div className="pt-5 justify-content-center justify-content-between"  style={{backgroundColor: '#5b4f6c'}}>
        <Product items={items}></Product>
      </div>
      </div>
    </div>
  )


}

export default App;
