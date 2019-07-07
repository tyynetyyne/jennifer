import React, { useState } from 'react'

const Images = ({images, alt}) => {
    return images.map((url, i) => {
        return (
            <img className="Gigs-img" src={url} alt={alt+i} key={i} />
        )
    })
}

const Gig = ({date, place, playlist, images}) => {
    const [ visibility, setVisibility ] = useState('none');

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
        <div className="Gigs-gig"  onClick={handleClick}>
            <h3>{date} @ {place} </h3>
            <div style={divStyle}>
                <h4>Biisilista</h4>
                <ol>
                {
                playlist.map((song, i) => {
                return(
                    <li className="Gigs-song" key={i} >
                    {song}
                    </li>
                )})}
                </ol>
                <h4>Kuvia keikalta</h4>
                <div className="Gigs-images-container">
                <Images images={images} alt={place}/>
                </div>
            </div>
        </div>
)} 

const Gigs = (props) => {
    return (
      <div className="Gigs">
        {props.gigs.map(gig => {
            return(
            <Gig key={gig.id} place={gig.place} date={gig.date} playlist={gig.playlist} images={gig.images} />
            )})}
      </div>
    )
  }

export default Gigs;