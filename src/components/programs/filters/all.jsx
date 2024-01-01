import React from 'react'
import ProgramCardManager from '../ProgramCardManager'
import theme from '../../../theme'

const all = ({ programs }) => {
    const palate = theme()

    return (
        <div className="col-sm-12 p-3 animated--grow-in" id='upComing'>
            <div className=" br-3 p-3 row d-flex team section-bg row" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }} >
                <h6 className='fs mb-3 d-flex headerPro'>
                    <span> All programmes</span>

                </h6>
                {programs?.length ? <ProgramCardManager programs={programs} /> : <div className='p-3 cardEl br-3'> All programmes should show here </div>}
            </div>
        </div>
    )
}

export default all