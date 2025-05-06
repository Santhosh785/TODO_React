import React, { use } from 'react'
// import { useState } from 'react';
import ListItems from './ListItems';

const Content = ({items,handleChange,handleDelete}) => {

  
  return (
   <main>

    {(items.length) ?(
      <ListItems
            items = {items}
            handleChange={handleChange}
            handleDelete={handleDelete}
      />
    ):(
      <p> Your List Is Empty </p>
    )}
    
   </main>
  )
}

export default Content
