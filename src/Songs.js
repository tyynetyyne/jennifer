import React from 'react';

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
    const filledInLyrics = fillInLyrics(props.lyrics);
    return (
        <div className="Songs-song">
            <h2>{props.name}</h2>
                {
                filledInLyrics.map((part, i) => {
                const splittedParts = addParagraphs(part);
                return(
                    <div className={"Songs-" + part.type} key={i}>
                    {splittedParts}
                    </div>
                )})}
        </div>
)}

const Songs = (props) => {
    return (
      <div className="Songs-songs">
        <h1>Jenniferin biisit</h1>   
        {props.songs.map(song => {
            return(
            <Song key={song.id} name={song.name} lyrics={song.lyrics} />
            )})}
      </div>
    )
  }

export default Songs;