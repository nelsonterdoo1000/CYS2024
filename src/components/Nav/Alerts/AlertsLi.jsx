import React from 'react'

const AlertsLi = (props) => {
    return <div className="dropdown-item" href="#" onClick={props?.onClick}>
        <div>
            <div className="small text-gray-500">{props?.date}</div>
            <div className='text-truncate'>
                {props.body}
            </div>
        </div>
    </div>
}

export default AlertsLi