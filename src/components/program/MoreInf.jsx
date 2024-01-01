import React from 'react'
import theme from '../../theme'

const MoreInf = (properties) => {
    const props = properties?.props
    const palate = theme()

    return (
        <div className='col-lg-7'>
            <div className="card p-0 animated--grow-in shadow-sm br-3" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <div className='card-header h5 d-flex' style={{
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }}>
                    Read more
                    <hr className='m-0 p-0' style={{opacity:'0.3'}}/>
                    <div className='h-link rounded-circle'>

                    </div>
                </div>
                <div className="card-body">
                    {props?.description}
                </div>
            </div>

        </div >

    )

}

export default MoreInf