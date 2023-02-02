const arrayProductos = [{
  "id": 1,
  "title": "Cadillac",
  "model": "Eldorado",
  "year": 1997,
  "category": "Old",
  "image": "https://media.ed.edmunds-media.com/cadillac/eldorado/1997/oem/1997_cadillac_eldorado_coupe_base_fq_oem_1_500.jpg",
  "price": 3750,
  "stock": 7
}, {
  "id": 2,
  "title": "Lexus",
  "model": "GS",
  "year": 1998,
  "category": "Old",
  "image": "https://media.ed.edmunds-media.com/lexus/gs-400/1998/oem/1998_lexus_gs-400_sedan_base_fq_oem_3_500.jpg",
  "price": 4700,
  "stock": 7
}, {
  "id": 3,
  "title": "Mazda",
  "model": "MX-5",
  "year": 2008,
  "category": "New",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIrB2suwE3hfpj6dziMI0e1vrfR_N32WCaAUIs6Lc&s",
  "price": 7500,
  "stock": 10
}, {
  "id": 4,
  "title": "Ford",
  "model": "Focus",
  "year": 2012,
  "category": "New",
  "image": "https://http2.mlstatic.com/D_NQ_NP_947602-MCO52698148404_122022-O.webp",
  "price": 6000,
  "stock": 5
}, {
  "id": 5,
  "title": "Lexus",
  "model": "LS",
  "year": 2004,
  "category": "New",
  "image": "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/171ab1e538119e13fa98382f268326fc825fdc20/photos/rEJZRA77.Zf-4xiS2v-(edit).jpg?t=163745384697",
  "price": 10000,
  "stock": 5
}, {
  "id": 6,
  "title": "GMC",
  "model": "Suburban 2500",
  "year": 1996,
  "category": "Old",
  "image": "https://bringatrailer.com/wp-content/uploads/2019/07/1564185888fcd2081564008063995acabe0Screenshot-2019-07-24-at-18.30.57-620x371-1.png",
  "price": 5500,
  "stock": 3
}, {
  "id": 7,
  "title": "Aston Martin",
  "model": "DB9",
  "year": 2006,
  "category": "New",
  "image": "https://car-images.bauersecure.com/wp-images/13900/480x270/db9sportspack_1_560px.jpg",
  "price": 43900,
  "stock": 3
}, {
  "id": 8,
  "title": "Porsche",
  "model": "911",
  "year": 2010,
  "category": "New",
  "image": "https://www.motortrend.com/uploads/sites/10/2015/11/2010-porsche-911-carrera-coupe-angular-front.png",
  "price": 35000,
  "stock": 3
}, {
  "id": 9,
  "title": "Mercedes-Benz",
  "model": "GLK",
  "year": 2009,
  "category": "New",
  "image": "https://http2.mlstatic.com/D_NQ_NP_642394-MCO52068949583_102022-W.jpg",
  "price": 15900,
  "stock": 3
}]

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
