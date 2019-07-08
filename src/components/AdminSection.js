import React, { useState } from 'react'

const AdminSection = (props) => {

    return (
        <div className="Section">
            <h1>{props.title}</h1>
            <div>
                {props.component}
            </div>
        </div>
    )
}

export default AdminSection;