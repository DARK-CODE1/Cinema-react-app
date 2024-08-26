import React, { useState } from 'react';
import NavListItem from '../../components/navListItem';
import NavListData from '../../data/navListData';
import './header.css';
import Search from '../../components/SearchBox/search';
import Button from '../../components/Button/button';


const Header = ({ scroll }) => {
  const [navList, setNavList] = useState(NavListData);

  const handleNavonClick = id => {
    const newNavList = navList.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);

  };



  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`} >
      <a href="/" className='logo'>
        Cinema</a>
      <ul className="nav">
        {NavListData.map(nav => (
          <NavListItem key={nav._id} nav={nav} navOnClick={handleNavonClick} />
        ))}
      </ul>
      <Search />
      <Button icon={<ion-icon name="log-in"></ion-icon>} name='Sing Up' />
    </header>
  )
}

export default Header