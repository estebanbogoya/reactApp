import { createContext, useState } from 'react';

//1. Crear un context con un valor predeterminado:

export const cartContext = createContext();

//2. Inicializar Provider 

function CartProvider(props) {
    const [cart, setCart] = useState([])
    
    const test = ()=>console.log("Test");

    function addToCart(item){
        let productInCart = cart.findIndex(itemEnCarrito => itemEnCarrito.id === item.id)
        let newCart = [...cart]
        if (productInCart !== -1 ) {
            newCart[productInCart].cantidad++
            alert(`Has agregado una unidad mas de ${newCart[productInCart].title} a tu carrito` )
        }else{
            newCart.push(item)
            setCart(newCart)
            
        }
        console.log(newCart);
    }

    function removeItem(id) {
        let cartAux = [...cart]
        cartAux = cartAux.filter(prod => prod.id !== id)
        setCart(cartAux)
        console.log(cartAux);
    }

    function clearCart() {
        let cartToEmpty = [...cart]
        cartToEmpty.length = 0
        setCart(cartToEmpty);
    }

    function getTotalItemsInCart() {
        let total = 0
        cart.forEach(producto => {
            total += producto.cantidad
        });
        return total
    }

    function totalPrice() {
        let totalPrecio = 0
        cart.forEach(producto => {
            totalPrecio = totalPrecio + (producto.cantidad * producto.price)
        });
        return totalPrecio
    }

    return (
        //3. Se retorna el Provider del context con un valor peronalizado

        <cartContext.Provider value={{ cart, test, addToCart, removeItem, clearCart, getTotalItemsInCart, totalPrice}}>
            {props.children}
        </cartContext.Provider>
    )
}


export { CartProvider }