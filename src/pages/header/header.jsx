import React from 'react';
import NavListItem from '../../components/navListItem';
import NavListData from '../../data/navListData';
import './header.css';
import Search from '../../components/SearchBox/search';


const Header = () => {
  return (
    <header>
      <a href="/" className='logo'>
        Cinema</a>
      <ul className="nav">
        {NavListData.map(nav => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
      <Search/>
    </header>
  )
}

export default Header