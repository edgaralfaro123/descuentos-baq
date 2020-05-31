import React, { useState, useEffect,useRef  } from 'react';




const Product = (props) =>{
  const {items=[]}={...props}
  //const productRef = useRef();
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
