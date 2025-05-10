import React from 'react'
// import { FaSearch } from 'react-icons/fa6'


const SearchItems = ({handleSearch,search,setsearch}) => {
  return (
    <form className='searchForm' onSubmit={handleSearch}>
    <label htmlFor="SearchItem">SearchItem</label>
        <input
         autoFocus
         type="text" 
         placeholder='Search Items'
         id="Search"
         role='searchbox'
         value={search}
         onChange={(e)=>setsearch(e.target.value)}
         
        />
    
    </form>
  )
}

export default SearchItems