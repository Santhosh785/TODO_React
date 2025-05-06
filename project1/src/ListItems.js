import React from 'react'
import LineItems from './LineItems';


const ListItems = ({items,handleChange,handleDelete}) => {
  return (
    <ul>
      {items.map((item) =>(
        <LineItems
            item = {item}
            key={item.id}
            handleChange={handleChange}
            handleDelete={handleDelete}

        />
      ))}
    </ul>
    )
}

export default ListItems