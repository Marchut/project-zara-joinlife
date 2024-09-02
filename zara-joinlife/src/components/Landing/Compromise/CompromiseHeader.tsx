// src/components/Compromise/CompromiseHeader.tsx
import React from 'react';
import './CompromiseHeader.scss';

interface CompromiseHeaderProps {
  title: string;
}

const CompromiseHeader: React.FC<CompromiseHeaderProps> = ({ title }) => {
  return <h1 className="compromise-header">{title}</h1>;
};

export default CompromiseHeader;
