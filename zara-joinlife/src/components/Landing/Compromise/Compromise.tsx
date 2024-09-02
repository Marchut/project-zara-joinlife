// src/components/Compromise/Compromise.tsx
import React from 'react';
import CompromiseHeader from './CompromiseHeader';
import CompromiseRow from './CompromiseRow';
import './Compromise.scss';

const Compromise: React.FC = () => {
  return (

    <div className="compromise">
      <CompromiseHeader title="COMPROMISOS" />
      <CompromiseRow
        year="2025"
        items={[
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi suscipit dolores assumenda inventore velit et quisquam cumque reiciendis nihil rerum eligendi culpa odit est pariatur eaque, quidem accusantium earum? Praesentium error excepturi minus a hic id natus suscipit explicabo magnam. Delectus saepe sunt iste quibusdam debitis commodi veritatis eius. Eum excepturi quidem, quod accusantium repellendus commodi non id ex."
          },
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi suscipit dolores assumenda inventore velit et quisquam cumque reiciendis nihil rerum eligendi culpa odit est pariatur eaque, quidem accusantium earum? Praesentium error excepturi minus a hic id natus suscipit explicabo magnam. Delectus saepe sunt iste quibusdam debitis commodi veritatis eius. Eum excepturi quidem, quod accusantium repellendus commodi non id ex."
          },
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi suscipit dolores assumenda inventore velit et quisquam cumque reiciendis nihil rerum eligendi culpa odit est pariatur eaque, quidem accusantium earum? Praesentium error excepturi minus a hic id natus suscipit explicabo magnam. Delectus saepe sunt iste quibusdam debitis commodi veritatis eius. Eum excepturi quidem, quod accusantium repellendus commodi non id ex."
          },
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi suscipit dolores assumenda inventore velit et quisquam cumque reiciendis nihil rerum eligendi culpa odit est pariatur eaque, quidem accusantium earum? Praesentium error excepturi minus a hic id natus suscipit explicabo magnam. Delectus saepe sunt iste quibusdam debitis commodi veritatis eius. Eum excepturi quidem, quod accusantium repellendus commodi non id ex."
          },
        ]}
      />
      <CompromiseRow
        year="2030"
        items={[
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: ""
          },
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: ""
          },
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi suscipit dolores assumenda inventore velit et quisquam cumque reiciendis nihil rerum eligendi culpa odit est pariatur eaque, quidem accusantium earum? Praesentium error excepturi minus a hic id natus suscipit explicabo magnam. Delectus saepe sunt iste quibusdam debitis commodi veritatis eius. Eum excepturi quidem, quod accusantium repellendus commodi non id ex."
          },
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi suscipit dolores assumenda inventore velit et quisquam cumque reiciendis nihil rerum eligendi culpa odit est pariatur eaque, quidem accusantium earum? Praesentium error excepturi minus a hic id natus suscipit explicabo magnam. Delectus saepe sunt iste quibusdam debitis commodi veritatis eius. Eum excepturi quidem, quod accusantium repellendus commodi non id ex."
          },
        ]}
      />

      <CompromiseRow
        year="2035"
        items={[
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi suscipit dolores assumenda inventore velit et quisquam cumque reiciendis nihil rerum eligendi culpa odit est pariatur eaque, quidem accusantium earum? Praesentium error excepturi minus a hic id natus suscipit explicabo magnam. Delectus saepe sunt iste quibusdam debitis commodi veritatis eius. Eum excepturi quidem, quod accusantium repellendus commodi non id ex."
          },
          {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi suscipit dolores assumenda inventore velit et quisquam cumque reiciendis nihil rerum eligendi culpa odit est pariatur eaque, quidem accusantium earum? Praesentium error excepturi minus a hic id natus suscipit explicabo magnam. Delectus saepe sunt iste quibusdam debitis commodi veritatis eius. Eum excepturi quidem, quod accusantium repellendus commodi non id ex."
          },
        ]}
      />
    </div>
  );
};

export default Compromise;
