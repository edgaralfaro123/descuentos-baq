import React, { useState, useEffect,useRef  } from 'react';
import { render } from '@testing-library/react';

const Header = () =>{
    const productRef = useRef();
    const [articulos, setArticulos] = useState([]);
    const buscarArticulos = async () => {
        
        let value=productRef.current.value;
        let url = `https://cuentasporcobrar.herokuapp.com/descuentos/producto/${value}`;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result)=> {
            //setSearch(result);
            setArticulos(result);
        render (<div className='col-sm-12 pading'><div>PRUEBA</div></div>

                /* articulos.map(
                    <div className='col-sm-3' key={articulos.codigo}>
                    <div className="card">
                        <img className="card-img-top" src={articulos.urlimagen} alt="Card image cap"/>
                        <div className="card-img-overlay descuento">
                        <a className="btn btn-sm btn-danger float-right"><strong>{articulos.descuento ? `${articulos.descuento}%` : "0%"}</strong></a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{articulos.descripcion}</h5>
                        <div className="bottom-wrap">
                        <a href="" className="btn btn-sm btn-primary float-right">Visitar</a>
                        <div className="price-wrap h5">
                            <span className="price-new precioHoy">${articulos.precio}</span> <del className="price-old">{articulos.precioanterior ? articulos.precioanterior : 0}</del>
                        </div>
                    </div>
                    </div>
                    </div>
                 */
                    //
                )
        })
        .catch((err)=>{
            console.error(err);
        })

    }
    return(
        <div className='col-sm-12 pading'>
            <center><a className="display-4"><strong> En cuanto me queda?</strong></a></center>
            <input type="text" className="form-control" ref={productRef} aria-describedby="emailHelp" placeholder="Que producto deseas comprar hoy?"></input>
            <button className="btn btn-danger" onClick={buscarArticulos}>Buscar</button>

        </div>
        
    )
}

export default Header;