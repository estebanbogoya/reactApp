import './navbar.css'
import React, {useContext, useState} from 'react'
import { cartContext } from '../../storage/cartContext'


export default function (props){
    const context = useContext(cartContext)
    
    return(
        <>
        <img height = "50px"src="/img/cartWidget.png" alt="cartWidget"/>
        <span>{context.getTotalItemsInCart()}</span>
        </>
    )
}
