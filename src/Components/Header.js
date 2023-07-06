import React from 'react'
//import {BsFillCartFill } from "react-icons/bs";
function Header(props) {
    
    const carthandler=()=>{
       props.setShowcart(!props.showcart)
    }
  return (
    <>
    <div onClick={()=>carthandler()}>Cart
    <sup>{props.count}</sup></div>
    </>
  )
}

export default Header