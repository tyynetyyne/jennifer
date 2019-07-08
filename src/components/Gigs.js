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
    //debugger
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

const isUpcoming = (dateStr) => {
    const dateNow= new Date();
    console.log(dateNow, dateStr);
    const dateArr = dateStr.split(".");
    const gigDate=new Date(dateArr[2],dateArr[1]-1,dateArr[0],0,0,0);
    return dateNow.getTime() < gigDate.getTime();
}

const Gigs = (props) => {
    const [ showAll, setShowAll ] = useState(true);
    const handleClick = (evt) => {
        evt.stopPropagation();
        setShowAll(!showAll);
    }
    const filteredGigs = showAll ? props.gigs : props.gigs.filter(gig => isUpcoming(gig.date));
    console.log(filteredGigs);
    return (
      <div className="Gigs">
        <button onClick={handleClick}>{!showAll ? "Näytä kaikki":"Näytä tulevat"}</button>
        {filteredGigs.map(gig => {
            return(
            <Gig key={gig.id} place={gig.place} date={gig.date} playlist={gig.playlist} images={gig.images} />
            )})}
      </div>
    )
  }

export default Gigs;