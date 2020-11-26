import React, { useState, useEffect,useRef  } from 'react';
import { render } from '@testing-library/react';
import  logo  from '../images/logo.png'
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

            <div className="row" style={{backgroundColor: '#fefaea'}}>
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <img src={ logo } className="img-fluid" alt="Logo" />
                </div>
                <div className="col-sm-2"></div>
                
                <div className='col-sm-2'></div>
                <div className='col-sm-8'>
                <h4>AL MEJOR PRECIO DEL MERCADO</h4>   
                </div>
                <div className='col-sm-2'></div>

                <div className='col-sm-2'></div>
                <div className='col-sm-7 pading margin'>
                    <input type="text" className="form-control" value={searchBar} onChange={inputchange} aria-describedby="emailHelp" placeholder="Que producto deseas comprar hoy?"></input>
                </div>
                <div className='col-sm-1 pading margin'>
                    <button className="btn btn-danger col-sm-12" onClick={()=>buscararticulo(searchBar)}>Buscar</button>
                </div>
                <div className='col-sm-2'></div>
                <div className='col-sm-12 justify-content-center'>

            </div>
        </div>

    )

}

export default Header;