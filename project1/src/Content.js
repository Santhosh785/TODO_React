import React, { use } from 'react'
import { useState } from 'react';
import { FaTrash } from "react-icons/fa6";

const Content = () => {

  const [items,setItems]=useState(
    [{
    id:1,
    checked:true,
    item:"practice coding"
  },
  {
    id:2,
    checked:false,
    item:"practice German"
  },
  {
    id:3,
    checked:true,
    item:"Learn react"
  }
])

 const  handleChange=(id)=>{
   const listItems = items.map((item)=>item.id===id ? {... item ,checked:!item.checked}:item)
   setItems(listItems)
 }

 const handleDelete=(id)=>{
  const listItems = items.filter((item)=>item.id!==id)
  setItems(listItems)
 }

  return (
   <main>

    <ul>
      {items.map((item) =>(
        <li className="item" key={item.id}>
          <input
          onChange={()=>handleChange(item.id)}
           type="checkbox"
           checked={item.checked} 
            />
            <label>{item.item}</label>
            <FaTrash 
            onClick={()=>handleDelete(item.id)} 
            role="button"
            />
        </li>
      ))}
    </ul>
    
   </main>
  )
}

export default Content
