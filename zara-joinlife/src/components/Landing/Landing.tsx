import React from 'react';
import './Landing.scss';
import MainVideo from './MainVideo/MainVideo';
import Intro from './Intro/Intro';
import Compromise from './Compromise/Compromise';
import Timeline from './Timeline/Timeline';

const Landing: React.FC = () => {
  return (
    <div className='landing'>

      <MainVideo />

      <section>
        <Intro />
      </section>

      <section>
        <img id="image-1" src="/dachshund.jpeg" alt="Funny dachshund" />
      </section>

      <section>
        <Compromise />
      </section>

      <section>
        <Timeline></Timeline>
      </section>

      <section>
        <img id="image-1" src="/cat.jpg" alt="Funny dachshund" />
      </section>

      <section>
        <Intro />
      </section>

      
    </div>
  );
};

export default Landing;
