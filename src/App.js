import React, { useState } from 'react';
import banner from './Jennifer_banner.png';
import Songs from './components/Songs';
import Gigs from './components/Gigs';
import Section from './components/Section';
import AdminSection from './components/AdminSection';
import NewGig from './components/NewGig';
import './App.css';

function App({songsData, gigsData}) {
  const [songs, setSongs] = useState(songsData);
  const [gigs, setGigs] = useState(gigsData);
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-logo" alt="logo" />
        <p>
          Tervetuloa Jenniferin sivuille!
        </p>
      </header>
      <div className="App-container">
        <Section title="Jenniferin biisit" component={<Songs songs={songs}/>} />
        <Section title="Keikat" component={<Gigs gigs={gigs}/>} />
        <AdminSection title="Admin" component={<NewGig gigs={gigs} setGigs={setGigs}/>}/>
      </div>
    </div>
  );
}

export default App;
