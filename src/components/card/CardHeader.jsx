import React from 'react'

const CardHeader = (props) => {
    return (
        <div className={`pl-3 py-3 ${props?.className}`} style={{
            borderBottom: `1px solid rgba(100,100,100,0.2)`
        }}>
            {props?.children}
        </div>
    )
}

export default CardHeader