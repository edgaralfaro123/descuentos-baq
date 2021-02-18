import React, { useState, useEffect,useRef  } from 'react';
import { render } from '@testing-library/react';
import  logo  from '../images/logo.png'
import  back  from '../images/imagenfondo.png'
console.log(logo);
const Header = (props) =>{
    const [searchBar, setSearchBar] = useState('');
    const [articulos, setArticulos] = useState([]);
    const {buscar:buscararticulo=undefined}={...props}

    useEffect(() => {
        console.log("se ejecuto useEffect");
    }, [articulos])

    const inputchange=(e)=>{
        const { target: { value = '' } = {} } = { ...e };
        setSearchBar(value);
    } 

    return(

            <div className="row" >
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <img src={ logo } className="img-fluid. max-width: 120% col-sm-12" alt="Logo" />
                </div>
                <div className="col-sm-1 "></div>
               <div className="col-sm-12">
                    <img src={ back } className="card-img-top"   alt="Logo" />
                        <div className="card-img-overlay text-center">
                            <h4 >AL MEJOR PRECIO DEL MERCADO</h4>  
                            <div className="row">
                                <div className='col-sm-2'></div>
                                <div className='col-sm-7  '>
                                    <input type="text" className="form-control" maxLength={30} value={searchBar} onChange={inputchange} aria-describedby="emailHelp" placeholder="Que producto deseas comprar hoy?"></input>
                                </div>
                                <div className='col-sm-1 '>
                                    <button className="btn btn-danger col-sm-12" onClick={()=>buscararticulo(searchBar)}>Buscar</button>
                                </div>
                                <div className='col-sm-2'></div>
                            </div>
                        </div>
                </div>

                <div className='col-sm-12 justify-content-center'>
                </div>
        </div>

    )

}

export default Header;