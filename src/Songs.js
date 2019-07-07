import React, { useState } from 'react'

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

    const divStyle = {display: visibility};

    return (
        <div className="Songs-song"  onClick={handleClick}>
            <h3>{props.name}</h3>
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
    return (
      <div className="Songs-songs">
        {props.songs.map(song => {
            return(
            <Song key={song.id} name={song.name} lyrics={song.lyrics} />
            )})}
      </div>
    )
  }

export default Songs;