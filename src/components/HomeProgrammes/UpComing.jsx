import React from 'react'
import theme from '../../theme'
import ProgramCard from './ProgrammeCard'
import { useStateContext } from '../../State/StateContext'
import { whenWillI } from '../../hooks/timeSpaces'

const UpComing = ({ options, className, bodyClass }) => {
    const { programmes } = useStateContext()
    const programs = programmes
    const palate = theme()
    const upComing = () => {
        const yetTo = programs?.filter(prog => whenWillI(prog).indexOf('remaining') > -1
        )
        return yetTo
    }

    return (
        <div className={`col-12 p-3 animated--grow-in ${className}`} id='upComing'>
            <div className={`p-3 row d-flex team  row animated--grow-in ${className} ${bodyClass}`} style={{
                backgroundColor: bodyClass || palate.background.default,
                color: bodyClass || palate.neutral.light
            }}>
                <div className='fs mb-3 d-flex align-items-center justify-content-center headerPro'>
                    <h4 className=""><b> Upcoming Events </b></h4>
                    {
                        options || ''}
                </div>
                {upComing()?.length ?
                    <>
                        {
                            upComing().map((program, i) => (
                                <ProgramCard key={i} program={program} className={className} />
                            ))
                        }
                    </>
                    : <div className='p-3 cardEl br-3'> Watch this space for our up coming programes and events </div>}
            </div>
        </div>
    )
}

export default UpComing