import React from 'react'

const SearchForm = ({ searchTerm, onChange, onSubmit }) => {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <label>Search</label>
          <input id="term" type="text" value={searchTerm} onChange={onChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default SearchForm