import Routes from './routes'
const {productsUrls}=Routes;

const buscarProductos = () => {
    return new Promise((resolve, reject) => {
        const apiPath=productsUrls.listar();
        fetch(apiPath)
            .then(res => res.json())
            .then((result) => resolve(result),(error) => reject(error))
        }
    );
}

const buscarProductosParams = (value) => {
    return new Promise((resolve, reject) => {
        if(value==''){
            const apiPath=productsUrls.listar();
            fetch(apiPath)
            .then(res => res.json())
            .then((result) => resolve(result),(error) => reject(error))
        }else{
            const apiPath=productsUrls.filtro(value);
            fetch(apiPath)
            .then(res => res.json())
            .then((result) => resolve(result),(error) => reject(error))
        }
        
        }
    );
}

export default {
    buscarProductos,
    buscarProductosParams
}