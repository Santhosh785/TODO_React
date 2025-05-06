import React from 'react'
import { FaTrash } from "react-icons/fa6";


const LineItems = ({item,handleChange,handleDelete}) => {
  return (
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
            aria-label={`Delete ${item.item}`}
            />
        </li>
  )
}

export default LineItems