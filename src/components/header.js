import React, { useState, useEffect,useRef  } from 'react';
import { render } from '@testing-library/react';

const Header = () =>{
    const productRef = useRef();
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        console.log("se ejecuto useEffect");
    }, [articulos])

/*     const dibujarArticulo = () => {
        return()=>(
            <div className="container">
                <div className="row">
                    {articulos.map(articulo =>(
                        <div className='col-sm-3' key={articulo.codigo}>
                            <h5 className="card-title">{articulo.descripcion}</h5>
                        </div>
                    ))}
                </div>
            </div>
        )
    } */
    const buscarArticulos = async () => {
        let value=productRef.current.value;
        let url = `https://cuentasporcobrar.herokuapp.com/descuentos/producto/${value}`;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result)=> {
            setArticulos(result);
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
            <products items={articulos}></products>
        </div>
        
    )

}

export default Header;