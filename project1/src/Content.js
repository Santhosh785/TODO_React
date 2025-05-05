import React, { use } from 'react'
// import { useState } from 'react';
import { FaTrash } from "react-icons/fa6";

const Content = ({items,handleChange,handleDelete}) => {

  
  return (
   <main>
    {(items.length) ?(
    <ul>
      {items.map((item) =>(
        <li className="item" key={item.id}>
          <input
          onChange={()=>handleChange(item.id)}
           type="checkbox"
           checked={item.checked} 
            />
            <label
            style={(item.checked)?{textDecoration:'line-through'}:null}
            onDoubleClick={()=>handleChange(item.id)}>{item.item}</label>
            <FaTrash 
            onClick={()=>handleDelete(item.id)} 
            role="button"
            />
        </li>
      ))}
    </ul>
    ):(
      <p> Your List Is Empty </p>
    )}
    
   </main>
  )
}

export default Content
