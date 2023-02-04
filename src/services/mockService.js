

const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    console.log("Conectando al backend...");


    setTimeout(() => {
      resolve(arrayProductos)
    }, 2000);
  })
}

const obtenerDetalle = (idWeb) => {
  return new Promise((resolve, reject) => {

    const productoEncontrado = arrayProductos.find((producto) => {
      return producto.id === parseInt(idWeb)
    })

    setTimeout(() => {
      if (productoEncontrado) {
        resolve(productoEncontrado)
      } else {
        reject("No se Encuentra el producto")
      }
    }, 2000);
  })
}

const obtenerCategoria = (categoryURL) => {
  return new Promise((resolve, reject) => {
    const categoriaEncontrada = arrayProductos.filter((producto) => {
      return producto.category === (categoryURL)
    })
    setTimeout(() => {
      if (categoriaEncontrada) {
        resolve(categoriaEncontrada)
      }else{
        reject("No se encontro la categoria")
      }

    }, 1000);
  })
}

export default obtenerProductos;
export { obtenerDetalle, obtenerCategoria }
