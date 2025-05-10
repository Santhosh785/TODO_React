import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddItem = ({newItem,setnewItem,handleSumbit}) => {

  const inputref = useRef()

  return (
    <form className='addForm' onSubmit={handleSumbit}>
        <label htmlFor="addItem">AddItem</label>
        <input 
        autoFocus
        ref={inputref}
        type="text"
        placeholder='Add Item'
        id="addItem" 
        value={newItem}
        onChange={(e)=>setnewItem(e.target.value)}
        />
        <button
        type='sumbit'
        aria-label='Add Item'
        onClick={()=>inputref.current.focus()}
        >
            <FaPlus/>

        </button>
    </form>

  )
}

export default AddItem