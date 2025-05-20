import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa6';

const AddItem = ({ newItem, setnewItem, handleSumbit }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSumbit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        placeholder="Add Item"
        id="addItem"
        value={newItem}
        onChange={(e) => setnewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
