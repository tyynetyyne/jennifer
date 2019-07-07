import React from 'react';
import banner from './Jennifer_banner.png';
import Songs from './Songs';
import Gigs from './Gigs';
import songsData from './songsData';
import gigsData from './gigsData';
import Section from './Section';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-logo" alt="logo" />
        <p>
          Tervetuloa Jenniferin sivuille!
        </p>
      </header>
      <div className="App-container">
        <Section title="Jenniferin biisit" component={<Songs songs={songsData}/>} />
        <Section title="Keikat" component={<Gigs gigs={gigsData}/>} />
      </div>
    </div>
  );
}

export default App;
