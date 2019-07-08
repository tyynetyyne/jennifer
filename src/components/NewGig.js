import React, { useState } from 'react'

const NewGig = ({gigs, setGigs}) => {
  const [newGig, setNewGig] = useState({place: "", date: "", showtime: "",  link: "", id: null, playlist: [], images:[]});
    const addGig = (evt) => {
      evt.preventDefault();
      const gigObject = {...newGig, id: gigs.length + 1,
      }
      setGigs(gigs.concat(gigObject));
      setNewGig({place: "", date: "", showtime: "",  link: "", id: null, playlist: [], images:[]});
    }
    const handleGigChange = (evt, type) => {
      setNewGig({...newGig, [type]: evt.target.value});
    }
  
    return (
      <div className="NewGig">
        <form onSubmit={addGig}>
        Keikkapäivä: <input onChange={e => handleGigChange(e, "date")} value={newGig.date}/> <br />
        Paikka: <input onChange={e => handleGigChange(e, "place")} value={newGig.place}/> <br />
        Showtime: <input onChange={e => handleGigChange(e, "showtime")} value={newGig.showtime}/> <br />
        Linkki: <input onChange={e => handleGigChange(e, "link")} value={newGig.link} size={30}/> <br />
        Playlist: <textarea onChange={e => handleGigChange(e, "playlist")} value={newGig.playlist} cols="30" rows="20"/> <br />
        <button type="submit">Lisää</button>
        </form>  
      </div>
    )
  }

export default NewGig;


