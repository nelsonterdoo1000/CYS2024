import React from 'react'
import ProgramCardManager from '../ProgramCardManager';
import theme from '../../../theme';

const OnGoing = ({ programs }) => {
    const palate = theme()
    const isItOnGoing = (program) => {
        const { end_datetime, start_datetime } = program;
        const date = new Date()
        const isThisYear = Number(end_datetime.slice(0, 4)) >= date.getFullYear()

        const isThisMonth = Number(end_datetime.slice(5, 7)) >= date.getMonth() + 1

        const isToday = Number(end_datetime.slice(8)) >= date.getDate() &&
            Number(start_datetime.slice(8)) <= date.getDate()

        const amIOngoing = isThisYear && isThisMonth && isToday

        return amIOngoing
    }

    const isOnGoing = programs?.filter(program => isItOnGoing(program))


    return (
        <div className="col-sm-12 p-3 animated--grow-in" id='upComing'>
            <div className={`br-3 p-3 row d-flex team row`} style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <h6 className='fs mb-3 d-flex headerPro'>
                    <span> Ongoing programs</span>

                </h6>
                {isOnGoing.length ? <ProgramCardManager programs={isOnGoing} /> : <div className='p-3 cardEl br-3'> All active programmes should show here </div>}
            </div>
        </div>
    )
}

export default OnGoing