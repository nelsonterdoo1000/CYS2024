import React from 'react'
import ProgramCardManager from '../ProgramCardManager'
import theme from '../../../theme'
import { whenWillI } from '../../../hooks/timeSpaces'

const upComing = ({ programs, options, className, bodyClass }) => {
    const palate = theme()
    const upComing = () => {
        const yetTo = programs?.filter(prog => whenWillI(prog).indexOf('remaining') > -1
        )
        return yetTo
    }

    return (
        <div className={`col-sm-12 p-3 animated--grow-in ${className}`} id='upComing'>
            <div className={`br-3 p-3 row d-flex team  row animated--grow-in ${className} ${bodyClass}`} style={{
                backgroundColor: bodyClass || palate.background.default,
                color: bodyClass || palate.neutral.light
            }}>
                <h6 className='fs mb-3 d-flex headerPro'>
                    <span> Upcoming programs</span>
                    {
                        options || ''}
                </h6>
                {upComing()?.length ? <ProgramCardManager programs={upComing()} className={className || ''} /> : <div className='p-3 cardEl br-3'> All upcoming programmes should show here </div>}
            </div>
        </div>
    )
}

export default upComing