// src/components/Header/NavBar.tsx
import React from 'react';
import './NavBar.scss';

const NavBar: React.FC = () => {
  return (
    <nav className="nav">
      <a className='nav-element active' href="#about">About</a>
      <a className='nav-element' href="#innovation">Innovación</a>
      <a className='nav-element' href="#projects">Proyectos</a>
    </nav>
  );
};

export default NavBar;