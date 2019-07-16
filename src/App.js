import React, { useState, useEffect } from 'react';
import banner from './Jennifer_banner.png';
import Songs from './components/Songs';
import Gigs from './components/Gigs';
import Section from './components/Section';
import AdminSection from './components/AdminSection';
import NewGig from './components/NewGig';
import './App.css';

import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);
  const [gigs, setGigs] = useState([]);

  const getGigs = () => {
    console.log('effect 1')
    axios
      .get('http://localhost:3001/gigs')
      .then(response => {
       // console.log('promise fulfilled')
        setGigs(response.data)
      })
  };

  const getSongs = () => {
    console.log('effect 2')
    axios
      .get('http://localhost:3001/songs')
      .then(response => {
      // console.log('promise fulfilled')
        setSongs(response.data)
      })
  };
  
  useEffect(getGigs, []);
  useEffect(getSongs, []);

  //console.log('render', gigs.length, 'gigs');
  //console.log('render', songs.length, 'songs');

  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-logo" alt="logo" />
        <p>
          Tervetuloa Jenniferin sivuille!
        </p>
      </header>
      <div className="App-container">
        <Section title="Jenniferin biisit" component={<Songs songs={songs} setSongs={setSongs}/>} />
        <Section title="Keikat" component={<Gigs gigs={gigs}/>} />
        <AdminSection title="Admin" component={<NewGig gigs={gigs} setGigs={setGigs}/>}/>
      </div>
    </div>
  );
}

export default App;
