import React, { use } from 'react'
// import { useState } from 'react';
import ListItems from './ListItems';

const Content = ({items,handleChange,handleDelete}) => {

  
  return (
   <>

    {(items.length) ?(
      <ListItems
            items = {items}
            handleChange={handleChange}
            handleDelete={handleDelete}
      />
    ):(
      <p> Your List Is Empty </p>
    )}
    
   </>
  )
}

export default Content
