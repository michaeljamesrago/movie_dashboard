import React from 'react'

const SearchForm = ({ searchTerm, onchange, onsubmit }) => {
  return (
    <div>
      <form onSubmit={onsubmit}>
        <label>Search</label>
        <input id="term" type="text" value={searchTerm} onChange={onchange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SearchForm