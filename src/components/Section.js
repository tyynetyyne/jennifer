import React, { useState } from 'react';

const Section = (props) => {
    const [ visibility, setVisibility ] = useState('none');
    
    const handleClick = () => {
        if(visibility !== 'none'){
            setVisibility('none');
        } else {
            setVisibility('block');
        }
    }

    const divStyle = {display: visibility};

    return (
        <div className="Section"  onClick={handleClick}>
            <h1>{props.title}</h1>
            <div style={divStyle}>
                {props.component}
            </div>
        </div>
    )
}

export default Section;