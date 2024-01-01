import React from 'react'
import { Link } from 'react-router-dom'
import ProgramCardManager from '../ProgramCardManager'
import theme from '../../../theme'

const ThisMonth = ({ programs }) => {
    const date = new Date()
    const palate = theme()
    const thisMonth = () => {
        const thisYear = programs.filter(prog => Number(prog.end_datetime.slice(0, 4)) >= date.getFullYear()
        )
        const thisMonthPro = thisYear && thisYear.filter(prog => Number(prog.end_datetime.slice(5, 7)) >= date.getMonth() + 1
        )

        return thisMonthPro
    }

    return (
        <div className="col-sm-12 p-3 animated--grow-in" id='upComing'>
            <div className="br-3 p-3 row d-flex team row" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <h6 className='fs mb-3 d-flex headerPro'>
                    <span> Programs for this Month</span>

                </h6>
                {thisMonth().length ? <ProgramCardManager programs={thisMonth()} /> : <div className='p-3 cardEl  br-3'> All programmes for this month should show here </div>}
            </div>
        </div>
    )
}

export default ThisMonth