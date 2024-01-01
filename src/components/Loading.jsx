import React, { useState } from 'react'

const Loading = () => {
    const [twitch, setTwitch] = useState(true)
    
    setInterval(() => {
        setTwitch(false)
        setTimeout(() => {
            setTwitch(true)
        }, 1500);
    }, 3000);


    return (
        <h1 className='loadingContainer'>
            <div className={`loading 
            ${twitch ? "transSlow" : "transQuick"}`}>Loading...</div>
        </h1>
    )
}

export default Loading