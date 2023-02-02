import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGL2sy_ctjbr_ENH63wvr9ohkFUat7958",
    authDomain: "reactestebanbogoya.firebaseapp.com",
    projectId: "reactestebanbogoya",
    storageBucket: "reactestebanbogoya.appspot.com",
    messagingSenderId: "566557804214",
    appId: "1:566557804214:web:2e2a970ba58243f44ac817"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

//Trabajar con ASYNC await porque es mas legible.

export async function obtenerProductos() {

    //Se obtienen los documentos de firestore.
    //1) Referencia a nuestra coleccion
    const productsRef = collection(database, "products");

    //2) Obtener todos los docs de products
    const respuesta = await getDocs(productsRef)

    /* console.log("------>>", respuesta.docs[0].data()) */
    const productos = respuesta.docs.map(elemento => {
        let producto = elemento.data()
        producto.id = elemento.id
        return producto
    }) 
    return (productos);
}

export async function obtenerDetalle(idWeb) {
    const productsRef = collection(database, "products");
    const docRef = doc(productsRef, idWeb)
    getDoc(docRef)
    const respuesta = await getDoc(docRef)
    let producto = {...respuesta.data(), id: respuesta.id}
    return producto
}

export async function obtenerCategoria(categoryURL){
    const productsRef = collection(database, "products");
    const queries = query(productsRef, where("category", "==", categoryURL))
    const respuesta = await getDocs(queries)
    const productos = respuesta.docs.map(elemento => {
        let producto = elemento.data()
        producto.id = elemento.id
        return producto
    }) 
    return (productos);
}

export default database;