import React, { use } from 'react'
import { useState } from 'react';

const Content = () => {
  
  const [Name , setName]=useState("Santhosh")
    function HandleNameChange(){
        const Names=['Santhosh','Gokul','Sybil'];
        const int =Math.floor(Math.random()*3);
         setName(Names[int]);
       }
       

  return (
   <main>
    <p>College friends:{Name}</p>
    <button onClick={HandleNameChange}>change</button>



   </main>
  )
}

export default Content
