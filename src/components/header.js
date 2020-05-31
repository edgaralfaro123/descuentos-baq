import React, { useState, useEffect,useRef  } from 'react';
import { render } from '@testing-library/react';

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
        <div className='col-sm-12 pading'>
            <center><a className="display-4"><strong> En cuanto me queda?</strong></a></center>
            <input type="text" className="form-control" value={searchBar} onChange={inputchange} aria-describedby="emailHelp" placeholder="Que producto deseas comprar hoy?"></input>
            <button className="btn btn-danger" onClick={()=>buscararticulo(searchBar)}>Buscar</button>
        </div>
        
    )

}

export default Header;