//import React from 'react';
import React from 'react';
import './App.css';
import Product from "./components/products";

const App = () => {

  // const buscarArticulos = async () => {
  //
  //   let url = `https://cuentasporcobrar.herokuapp.com/descuentos/producto/valor`;
  //   fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((result)=> {
  //
  //
  //     console.log(result);
  //   })
  //   .catch((err)=>{
  //     console.error(err);
  //   })
  // }

  return(
    <div>

      <Product></Product>
  </div>
  )


}

export default App;
