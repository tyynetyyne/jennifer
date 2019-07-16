import React, { useState } from 'react';
import axios from 'axios';

const fillInLyrics = (lyrics) => {
    return lyrics.map(item => {
        if(item.text === undefined){
            const source = lyrics.find(part => part.type === item.type);
            return source.text ? {...item, text: source.text} : {...item, text: "..."};
        } else {
            return item;
        }
    })
}

const addParagraphs = (part) => {
     return part.text.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>;
    });
 }

const Song = (props) => {
    const [ visibility, setVisibility ] = useState('none');
    const filledInLyrics = fillInLyrics(props.lyrics);

    const handleClick = (evt) => {
        //console.log('clicked', visibility);
        evt.stopPropagation();
        if(visibility !== 'none'){
            setVisibility('none');
        } else {
            setVisibility('block');
        }
    }

    const readingStatus = props.read ? "Songs-read" : "Songs-unread";
    const divStyle = {display: visibility};
    const label = props.read ? 'merkitse lukemattomaksi' : 'merkitse luetuksi'

    return (
        <div className="Songs-song"  onClick={handleClick}>
            <h3 className={readingStatus}>{props.name}</h3>
            <button onClick={props.toggleImportance}>{label}</button>
            <div style={divStyle}>
                {
                filledInLyrics.map((part, i) => {
                const splittedParts = addParagraphs(part);
                return(
                    <div className={"Songs-" + part.type} key={i} >
                    {splittedParts}
                    </div>
                )})}
            </div>
        </div>
)} 

const Songs = (props) => {
    const toggleImportanceOf = (evt, id) => {
        evt.stopPropagation();
        const url = `http://localhost:3001/songs/${id}`
        const song = props.songs.find(n => n.id === id)
        const changedSong = { ...song, read: !song.read }
      
        axios
        .put(url, changedSong)
        .then(response => {
          props.setSongs(props.songs.map(song => song.id !== id ? song : response.data))
        })
      }
    return (
      <div className="Songs-songs">
        {props.songs.map(song => {
            return(
            <Song key={song.id} name={song.name} lyrics={song.lyrics} read={song.read} toggleImportance={(evt) => toggleImportanceOf(evt, song.id)} />
            )})}
      </div>
    )
  }

export default Songs;