import React from 'react'
import './search-box.styles.css'

const SearchBox = ({ placeholder, changeHandler }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={changeHandler}
  />
)

export default SearchBox;