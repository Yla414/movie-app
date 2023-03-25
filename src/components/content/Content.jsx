import React, { useEffect, useState } from 'react';
import './content.css';

import { 
  RiNotification2Line as Bell
} from 'react-icons/ri';

import { 
  FaChevronDown as DropdownIcon 
} from 'react-icons/fa';

import { RiArrowLeftCircleLine as Prev, RiArrowRightCircleLine as Next  } from'react-icons/ri'
 
import userImage from '../../assets/user.png';
import MovieList from '../movieList/MovieList';
import SearchBox from '../container/searchBox/SearchBox';

const Content = () => {

  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=94475b0c`;

    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  return (
    <div className='flickbase__content'>
      <div className='flickbase__content-header'>
        {/* Start of the search bar */}
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
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
        <div className='flickbase__content-container__heading'>
          <h2>Trending</h2>

          <div className='flickbase__content-container__heading-controller'>
            <Prev color='grey' size={35} style={{cursor: 'pointer'}} />
            <Next color='grey' size={35} style={{cursor: 'pointer'}} />
          </div>
        </div>
        <div className='flickbase__content-container-row'>
          <MovieList movies={movies} />
        </div>
      </div>
      
    </div>
  )
}

export default Content;
