// src/components/Header/SearchBar.tsx
import React from 'react';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Buscar" />
      {/* <button>Buscar</button> */}
    </div>
  );
};

export default SearchBar;