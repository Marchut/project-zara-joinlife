// src/components/Header/Header.tsx
import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import UserOptions from './UserOptions';
import './Header.scss';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Menu />
      <div className='logo-and-navbar'>
        <Logo />
        <NavBar />
      </div>
      <SearchBar />
      <UserOptions />
    </header>
  );
};

export default Header;