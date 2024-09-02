// src/components/Compromise/ExpandableItem.tsx
import React, { useState } from 'react';
import { ExpandableItemProps } from '../../types';
import './ExpandableItem.scss';

const ExpandableItem: React.FC<ExpandableItemProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`expandable-item ${isOpen ? 'open' : ''}`}>
      <div className="header-expandable" onClick={toggleOpen}>
        <span>{title}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  );
};

export default ExpandableItem;
