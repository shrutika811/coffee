import React from 'react';
import { useEffect, useState } from "react";
import CoffeeItem from './CoffeeItem';

let dummyResource=[];
const Coffee=()=>{
    const[item,setItem]=useState(dummyResource);
   
  useEffect(()=>{
    fetch('https://api.sampleapis.com/coffee/hot').then(res=>res.json()).then(data=>setItem(data) );
 
  },[]);
  
  const mystyle={
        display:"flex",
        flexWrap: "wrap",
        justifyContent: 'space-around',
        gap:"4rem"
  };
 return(
    <>
    <div style={{backgroundColor:"black"}}>
    <div>
      <h1 style={{display:"flex" ,fontSize:"4rem",justifyContent:"center",padding:"4rem",color:"red"}}>Scroll to see Tasty Coffee Menu!!</h1>
      </div>
    <div style={mystyle}>
       {
        item.map((coffee)=>(
          <CoffeeItem {...coffee} key={coffee._id}/>
        ))}
       </div>
       </div>
    </>
 )
}
export default Coffee;