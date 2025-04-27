import React from 'react'
import { useState } from 'react';

const Content = () => {
    function HandleNamechange(){
        const Names=['Santhosh','Gokul','Sybil'];
        const int =Math.floor(Math.random()*3);
        return Names[int];
       }

       const handleChange = ()=>{
        alert("hello");
       }
       const handleChange1 = ()=>{
        alert("hello santhosh");
       }
  return (
    <main>
    <p>Hey This is {HandleNamechange()}</p>
    <button onDoubleClick={handleChange1} type="button" className="btn-outline-success">Primary</button>
    </main>
  )
}

export default Content
