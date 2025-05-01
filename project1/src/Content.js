import React from 'react'
import { useState } from 'react';

const Content = () => {
    function HandleNamechange(){
        const Names=['Santhosh','Gokul','Sybil'];
        const int =Math.floor(Math.random()*3);
        return Names[int];
       }
       
       const [count , setCount]= useState(99);

       function increment(){
        setCount(count + 1)
       }

       function decrement(){
        setCount(count - 1)
       }
  return (
   <main>
    <p>College friends:{HandleNamechange()}</p>
    <button onClick={increment}>+</button>
    <span>{count}</span>
    <button onClick={decrement}>-</button>

   </main>
  )
}

export default Content
