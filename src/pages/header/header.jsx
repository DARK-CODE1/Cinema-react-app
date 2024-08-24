import React from 'react';
import NavListItem from '../../components/navListItem';
import NavListData from '../../data/navListData';
import './header.css';
import Search from '../../components/SearchBox/search';
import Button from '../../components/Button/button';


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
      <Search />
      <Button icon={<ion-icon name="log-in"></ion-icon>} name='Sing Up' />
    </header>
  )
}

export default Header