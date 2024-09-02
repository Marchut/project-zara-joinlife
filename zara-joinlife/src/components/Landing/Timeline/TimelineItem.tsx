// src/components/Timeline/TimelineItem.tsx
import React from 'react';
import './TimelineItem.scss';
import { TimelineItemProps } from '../../types';

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-header">
        <h4>{title}</h4>
      </div>
      <div className='timeline-line'></div>
      <p>{description}</p>
    </div>
  );
};

export default TimelineItem;
