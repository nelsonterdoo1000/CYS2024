import React from 'react'
import theme from '../../../theme'

const Actions = ({ props }) => {
    const palate = theme()
    return (
        <div className="card mb-4 animated--grow-in shadow-sm  br-3" style={{
            backgroundColor: palate.background.default,
            color: palate.neutral.light
        }}>
            <div className="card-body row p-0">
                <ul className='list-group-items list-group-flush'>
                    <li className="d-flex align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">ID: {props?.id}</p>
                    </li>
                    <li className="d-flex align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">Date created: {props?.created_at}</p>
                    </li>
                    <li className="d-flex align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">Start date:  {props?.start_datetime}</p>
                    </li>

                    <li className="d-flex align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">End date:  {props?.end_datetime}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Actions