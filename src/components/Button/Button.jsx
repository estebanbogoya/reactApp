import React,{useState, useEffect} from 'react';

export default function Button(props){
    /* const [colorState, setColorState] = useState("blue")
    let styleButton = {
        backgroundColor: colorState,
        marginLeft: '47%'
    } */

    return(
        <>
        <button onClick={props.onClick} className={props.className}>{props.children}</button>
        </>
    )
}