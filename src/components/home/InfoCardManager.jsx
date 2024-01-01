import React from 'react'
import InfoCard from './HomeMain'

const InfoCardManager = (props) => {
    const data=props?.data
    const info = data?.info

    return (
        <div className='infoCardManager row'>
            {info?.map(obj => {
                return <InfoCard key={Math.random()*2000} props={obj} />
            })}
        </div>
    )
}

export default InfoCardManager