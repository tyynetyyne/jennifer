import React, { useState, useEffect } from 'react';
import banner from './Jennifer_banner.png';
import Songs from './components/Songs';
import Gigs from './components/Gigs';
import Section from './components/Section';
import AdminSection from './components/AdminSection';
import NewGig from './components/NewGig';
import './App.css';

import gigsService from './services/gigs';
import songsService from './services/songs';

function App() {
  const [songs, setSongs] = useState([]);
  const [gigs, setGigs] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getGigs = () => {
    console.log('effect 1')
    gigsService
      .getAll()
      .then(response => {
       // console.log('promise fulfilled')
        setGigs(response.data)
      })
  };

  const getSongs = () => {
    console.log('effect 2')
    songsService
      .getAll()
      .then(response => {
      // console.log('promise fulfilled')
        setSongs(response.data)
      })
  };
  
  useEffect(getGigs, []);
  useEffect(getSongs, []);

  //console.log('render', gigs.length, 'gigs');
  //console.log('render', songs.length, 'songs');

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-logo" alt="logo" />
        <p>
          Tervetuloa Jenniferin sivuille!
        </p>
      </header>
      <div className="App-container">
        <Notification message={errorMessage} />
        <Section title="Jenniferin biisit" component={<Songs songs={songs} setSongs={setSongs} setErrorMessage ={setErrorMessage}/>} />
        <Section title="Keikat" component={<Gigs gigs={gigs} setErrorMessage ={setErrorMessage}/>} />
        <AdminSection title="Admin" component={<NewGig gigs={gigs} setGigs={setGigs} setErrorMessage ={setErrorMessage}/>}/>
      </div>
    </div>
  );
}

export default App;
