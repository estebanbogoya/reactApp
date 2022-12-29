import React from "react";
import "./button.css";

export default function Button (props){
    //React.useState()->[stateVar, setterStateVar]
    let[colorState, setColorState] = React.useState("orange"); 

    console.log("----> Me ejecuto",colorState);

    let styleButton ={
        backgroundColor: colorState
    }

    function handleClick(evt){
        console.log("Evento Click");
        //colorState="red";
        setColorState("red");
    }
    return(
        <div className="divBotones">
        <button onClick = {handleClick} style ={styleButton} className="btn">Boton de Prueba</button>
        </div>
    );
}