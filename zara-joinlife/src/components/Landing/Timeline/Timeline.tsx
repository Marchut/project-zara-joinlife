// src/components/Timeline/Timeline.tsx
import React, { useRef } from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.scss';

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2>PRINCIPALES HITOS DESDE 2001</h2>
        <div className="timeline-controls">
          <button onClick={scrollLeft}>&lt;</button>
          <button onClick={scrollRight}>&gt;</button>
        </div>
      </div>
      <div className="timeline" ref={timelineRef}>
        <TimelineItem
          title='2023'
          description=''
        />
        <TimelineItem
          title="96% ALGODÓN DE FUENTES PREFERENTES"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam vitae accusamus sunt vero rerum sapiente quam autem minus culpa ad non unde ipsum, aspernatur atque eos inventore dicta in esse."
        />
        <TimelineItem
          title='2022'
          description=''
        />
        <TimelineItem
          title="85% FIBRAS CELULÓSICAS ARTIFICIALES DE FUENTES PREFERENTES"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nam quidem fuga cumque maxime? Repellat aperiam ipsum delectus assumenda omnis necessitatibus et doloremque, unde deleniti, eos mollitia asperiores obcaecati voluptatibus."
        />
        <TimelineItem
          title="95% ELIMINACIÓN DE PLÁSTICOS DE UN SOLO USO AL CLIENTE"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, et odit quaerat similique sed dolor sunt sint suscipit mollitia explicabo inventore expedita itaque animi distinctio, rem provident nam perspiciatis deleniti?"
        />
        <TimelineItem
          title='2021'
          description=''
        />
        <TimelineItem
          title="RESIDUO CERO EN TIENDAS PROPIAS"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores temporibus modi eaque consequuntur, non aliquid repellendus quis recusandae alias aperiam veritatis quaerat facere dolorum quisquam, fugiat reprehenderit odit, minus saepe."
        />
        <TimelineItem
          title='2020'
          description=''
        />
        <TimelineItem
          title='2019'
          description=''
        />
        <TimelineItem
          title='2018'
          description=''
        />
        {/* Agregar más TimelineItem según sea necesario */}
      </div>
    </div>
  );
};

export default Timeline;
