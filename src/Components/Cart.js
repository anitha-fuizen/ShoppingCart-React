/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Cartlist from './Cartlist';
import Header from './Header';


function Cart() {
    const [data,setData]=useState()
    const [searchTerm, setSearchTerm] = useState('');  
    const [searchResults, setSearchResults] = useState([]);
      const [carts,setCarts]=useState([])
      const [showcart,setShowcart]=useState(false)
   
   const fetchdata=async()=>{
      await axios.get("https://fakestoreapi.com/products")
      .then(response=>{setData(response.data);setSearchResults(response.data)})
      
      .catch(error=>console.log(error))
   }
  //  console.log(data)

    const searchfunction=()=>{
      if(searchTerm===''){
        setSearchResults(data)
       }else{
        const finalresult=data.filter((event)=>(
          event.title.toLowerCase().includes(searchTerm.toLowerCase())
     ))
  
      setSearchResults(finalresult)
     // console.log(data);
       }
       }
      
  
      const handlesubmit=(e)=>{
        e.preventDefault();
      }
 const cart=[]
const Addtocart=(data)=>{
 const cartfilter=carts.filter((x)=>{return x.title===data.title})
 if(cartfilter.length>0)
 {
  carts.map((x,i)=>{if (carts[i].title===data.title){
    carts[i].qut=carts[i].qut+1;
 setCarts((prev)=>[...prev])
 console.log(carts);}})
  
  
   
 } 
 else{
  cart.push(data)
  console.log(cart)
    setCarts((prev)=>[...prev,data])
  
 }
  
    console.log(carts)
}


     useEffect(() => {
       fetchdata()
       searchfunction()
      // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [])
   
   
  return (
    <>
    {/* <Addtocart addtocart={ Addtocart}/> */}
    
    <Header count={carts.length} showcart={showcart} setShowcart={setShowcart}/>
    
    {showcart&&<Cartlist carts={carts} setCarts={setCarts} />}
    <div className='items'>
   <form onSubmit={handlesubmit}>
    <input type='text' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
    <button onClick={searchfunction}>search</button>
    
   </form>
      
   { searchResults&&searchResults.map((x,i)=>{
     return <div className='items-row' key={x}>
       
     
    <div> <img src={x.image} style={{height:"50px",width:"50px"}}/></div>
    <div>{x.title}</div>
    <div>rating:{x.rating.rate}</div>
    <div>price:{x.price}</div>
    <div>{x.category}</div>
    <button onClick={()=>Addtocart({...x,qut:1})}>Add to Cart</button>
     </div>

          
   })}
   </div>
    </>
  )
}

export default Cart