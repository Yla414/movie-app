import React, { useEffect, useState } from 'react';
import './content.css';

import { 
  RiSearch2Line as SearchButton,
  RiNotification2Line as Bell
} from 'react-icons/ri';

import { FaChevronDown as DropdownIcon } from 'react-icons/fa';

import userImage from '../../assets/user.png';

const Content = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/movies`)
    .then(response => response.json)
    .then(data => data.results)
    .catch(error => alert(error))
  }, []);

  return (
    <div className='flickbase__content'>
      <div className='flickbase__content-header'>
        {/* Start of the search bar */}
        <div className='flickbase__content-header__search-bar'>
          <input type="search" name="search" id="search-box" placeholder='Search for TV Shows, Series, Movies, and more...' />
          <button type="submit" className='flickbase__content-header__search-bar__button'>
            <SearchButton className='search-button' size={23} />
          </button>
        </div>
        {/* End of search bar */}

        {/* Start of Profile */}
        <div className='flickbase__content-header__profile-area'>
          <div className='flickbase__content-header__profile-area__notification'>
            <Bell className='flickbase__content-header__profile-area__notification-bell' color='#fff' size={21} />
            <span className='flickbase__content-header__profile-area__notification-bell__count' id='bell-count'></span>
          </div>

          <div className='flickbase__content-header__profile-area__user'>
            <h4>Hi, Yusuf!</h4>
            
            <div className='flickbase__content-header__profile-area__user-dropdown'>
              <img src={userImage} alt="user" />
              <DropdownIcon className='flickbase__content-header__profile-area__user-dropdown__icon' size={12} />
            </div>
          </div>
        </div>
        {/* End of profile */}
      </div>
      {/* End of header */}

      {/* Start of content */}
      <div className='flickbase__content-container'>
        <div className='flickbase__content-container__trending'>
          <h2>Popular Movies</h2>
 
          <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Content;
