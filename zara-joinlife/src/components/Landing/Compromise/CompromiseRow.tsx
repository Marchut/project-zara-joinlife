// src/components/Compromise/CompromiseRow.tsx
import React from 'react';
import ExpandableItem from './ExpandableItem';
import { CompromiseRowProps } from '../../types';
import './CompromiseRow.scss';

const CompromiseRow: React.FC<CompromiseRowProps> = ({ year, items }) => {
  return (
    <div className="compromise-row">
      <div className="year">{year}</div>
      <div className="items">
        {items.map((item, index) => (
          <ExpandableItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default CompromiseRow;
