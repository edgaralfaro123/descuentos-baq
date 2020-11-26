import React, { useState, useEffect,useRef  } from 'react';

const Product = (props) =>{
  const {items=[]}={...props}
  console.log(items);
  return(
    <div>
      <div className="container" >
      <div className="row">
      { items.map(item =>(
        <div className='col-sm-3' key={item.codigo}>
          <div style={styles.well}>
            <img className="card-img-top" src={item.urlimagen} alt="Card image cap" style={{borderRadius: "25px",paddingTop: "10px"}}/>
            <div className="card-img-overlay descuento">
            {item.descuento ? <a className="btn btn-sm float-right" style={{background:'#f4787a'}}> <strong> ${item.descuento}% </strong></a>: ""}
            </div>
            <div className="card-body" >
              <h5 className="card-title">{item.descripcion}</h5>
              <div className="bottom-wrap">
              <a href="" className="btn btn-sm float-right" style={{background:'#5b4f6c',color:'#fefaea'}}>Visitar</a>
              <div className="price-wrap h5">
                <span className="price-new " style={{color:'#f4787a'}}>${item.precio}</span> <del className="price-old">{item.precioanterior ? item.precioanterior : 0}</del>
            </div>
            </div>
            </div>
          </div>
        </div>
      
      ))}

      </div>
      </div>
    </div>
  )

}
const styles = {

  well:{
    borderRadius: "26px",
    background: "#fefaea",
    boxShadow:  "5px 5px 18px #b7b4a8,-5px -5px 18px #ffffff"
  }

};

export default Product;
