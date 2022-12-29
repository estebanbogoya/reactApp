import React, {useState, useEffect} from "react";

export default function BotonPrueba(){
    const [test, setTest] = useState(0);

    useEffect(()=>{
        console.log("Conectando a la DB...");
    }, [])
    //Dependency Array. Si se pone vacio, solo se llama una vez

    console.log("Me ejecuto siempre ---->")

    return(
        <div>
            <button onClick={()=>setTest(test+1)} className="btn btn-success">Boton Prueba 2</button>
        </div>
    );
}