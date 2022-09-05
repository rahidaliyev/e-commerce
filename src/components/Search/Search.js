import React from 'react'
import "../Search/Search.css"
import Searchlogo from "../../icons/search-line.svg"

export default function Search() {
  return (
    <div>
<div className='search-container'>
    <input className='search-input' type='text' placeholder="e.g. 'wordpress'" /> 
     <img src={Searchlogo} className="search-logo" alt="search-logo"/>
     <button className='search-btn'>Search</button>
</div>

    </div>
  )
}
