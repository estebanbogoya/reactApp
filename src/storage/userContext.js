import { createContext } from 'react';

//1. Crear un context:
export const userContext = createContext({ user: "Anonymous" })

//2. Inicializar Provider 

function UserProvider(props) {
    return (
        //3. Se retorna el Provider del context con un valor peronalizado
        <userContext.Provider value={{ user: "Esteban" }}>
            {props.children}
        </userContext.Provider>
    )
}


export { UserProvider }