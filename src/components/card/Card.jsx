import React from 'react'

const Card = (props) => {
    return (
        <div className={`card mb-4 br-3 ${props?.className}`} style={props?.style}>
            {props?.children}
        </div>
    )
}

export default Card