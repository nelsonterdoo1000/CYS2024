import React from 'react'
import ProgramCardManager from '../ProgramCardManager'
import theme from '../../../theme'

const ThisYear = ({ programs }) => {
    const date = new Date()
    const palate = theme(``)
    const thisYear = () => {
        const thisYear = programs.filter(prog => Number(prog.end_datetime.slice(0, 4)) == date.getFullYear()
        )
        return thisYear
    }

    return (
        <div className="col-sm-12 p-3 animated--grow-in" id='upComing'>
            <div className="br-3 p-3 row d-flex team row" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <h6 className='fs mb-3 d-flex headerPro'>
                    <span>Programs for this year</span>
                </h6>
                {thisYear().length ? <ProgramCardManager programs={thisYear()} /> : <div className='p-3 cardEl  br-3'> All programmes for this year should show here </div>}
            </div>
        </div>
    )
}

export default ThisYear