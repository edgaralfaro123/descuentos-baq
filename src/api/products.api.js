
const buscarProductos = () => {
    return new Promise((resolve, reject) => {
        fetch("https://cuentasporcobrar.herokuapp.com/descuento/listar")
            .then(res => res.json())
            .then((result) => resolve(result),(error) => reject(error))
        }
    );
}

export default {
    buscarProductos
}