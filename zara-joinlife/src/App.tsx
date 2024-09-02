import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Static */}
      <div className='static'>
        <Header />
      </div>
      
      {/* Dynamic */}
      <Landing />
      <Footer></Footer>
    </div>
  );
}

export default App;
