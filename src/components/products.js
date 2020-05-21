import React, { useState, useEffect,useRef  } from 'react';




const Product = () =>{
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  //const productRef = useRef();
  const [error, setError] = useState(null);

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

  return(
    <div className="container">
    <div className="row">
    { items.map(item =>(
      <div className='col-sm-3' key={item.codigo}>
        <div className="card">
          <img className="card-img-top" src={item.urlimagen} alt="Card image cap"/>
          <div className="card-img-overlay descuento">
            <a className="btn btn-sm btn-danger float-right"><strong>{item.descuento ? `${item.descuento}%` : "0%"}</strong></a>
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.descripcion}</h5>
            <div className="bottom-wrap">
            <a href="" className="btn btn-sm btn-primary float-right">Visitar</a>
            <div className="price-wrap h5">
              <span className="price-new precioHoy">${item.precio}</span> <del className="price-old">{item.precioanterior ? item.precioanterior : 0}</del>
          </div>
          </div>
          </div>
        </div>
      </div>
    ))}

    </div>
    </div>
  )
}


export default Product;
