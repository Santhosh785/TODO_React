import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddItem = ({newItem,setnewItem,handleSumbit}) => {
  return (
    <form className='addForm' onSubmit={handleSumbit}>
        <label htmlFor="addItem">AddItem</label>
        <input 
        autoFocus
        type="text"
        placeholder='Add Item'
        id="addItem" 
        value={newItem}
        onChange={(e)=>setnewItem(e.target.value)}
        />
        <button
        type='sumbit'
        aria-label='Add Item'
        >
            <FaPlus/>

        </button>
    </form>

  )
}

export default AddItem