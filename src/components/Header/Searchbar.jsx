import React from 'react';
import searchIcon from '../../assets/imgs/search-icon.svg';
import './navbar.css';

function SearchBar({ placeholder }) {
    return (
        <div className="search-bar">
          <input type="text" placeholder="Search" className="p-2 bg-white"/>
            <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
    );
}

export default SearchBar;
