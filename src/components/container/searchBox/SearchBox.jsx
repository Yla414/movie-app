import React from 'react';
import './searchbox.css';
import {  RiSearch2Line as SearchButton } from 'react-icons/ri';

const SearchBox = (props) => {
  return (
   <div className='flickbase__content-header__search-bar'>
      <input 
      value={props.value}
      onChange={(event)=> props.setSearchValue(event.target.value)}
      type="search" 
      placeholder='Search for TV Shows, Series, Movies, and more...' />
      <button type="submit" className='flickbase__content-header__search-bar__button'>
      <SearchButton className='search-button' size={23} />
      </button>
   </div>
  )
}

export default SearchBox;
