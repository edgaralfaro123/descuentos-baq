const BasePath='https://cuentasporcobrar.herokuapp.com';

const productsUrls={
    listar:()=>`${BasePath}/descuento/listar`,
    filtro:(query)=>`${BasePath}/descuentos/producto/${query}`

}

export default{
    productsUrls
}
    
