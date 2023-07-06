/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
//import Header from './Header'

function Cartlist(props) {
   const[count,setCount]=useState(false)

   const removeproduct=(item)=>{
    
        props.setCarts(props.carts.filter((x)=>x !==item))
      
   }
  
 React.useEffect(() => {
    setCount(false)
    
  }, [count])
  
  return (
    <div>
     
     {props.carts && props.carts.map((item,index)=>{
      return <div key={index}>
        <img src={item.image} width={40}/> 
        <span>{item.price}</span>
         <span>{item.title}</span> 
         <button onClick={()=>{props.carts[index].qut>1?item.qut-=1:props.carts[index].qut==1?removeproduct(item):item.qut=item.qut;setCount(true)}} >-</button>   
         <span>{item.qut}</span> 
         <button onClick={()=>{props.carts[index].qut=item.qut+1;setCount(true)}}>+</button>
       
       </div>
    })}
    <span>Total :</span> 
     {props.carts.map(item=>item.price*item.qut).reduce((total,current)=>total+current,0)}

   
    </div>
  )
}

export default Cartlist