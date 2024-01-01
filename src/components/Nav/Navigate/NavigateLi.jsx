import React from 'react'
import { Link } from 'react-router-dom'

const NavigateLi = (props) => {
    return props?.where? <Link to={`${props?.where || ''}`} 
    className='dropdown-item noDec h6 '
    onClick={props?.onClick}>
        <div className='text-truncate'>
            {props?.text}
        </div>
        <div className="small text-gray-500">{props?.description}</div>
    </Link>
    :<div></div>
}

export default NavigateLi