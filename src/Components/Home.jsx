import React, { useState } from 'react';
import Header from './Header';
import BodyLeft from './BodyLeft';
import Bodyright from './Bodyright';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(''); 

  return (
    <div>
      <Header onSearch={setSearchQuery} /> 

      <div className='App-body'>
        <BodyLeft />
        
        <Bodyright searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Home;
