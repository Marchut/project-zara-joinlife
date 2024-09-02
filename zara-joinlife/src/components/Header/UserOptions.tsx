// src/components/Header/UserOptions.tsx
import React from 'react';
import './UserOptions.scss';

const UserOptions: React.FC = () => {
  return (
    <div className="user-options">
      <a href="#login">Iniciar Sesión</a>
      <a href="#help">Ayuda</a>
      <a href="#cart">Cesta (0)</a>
    </div>
  );
};

export default UserOptions;