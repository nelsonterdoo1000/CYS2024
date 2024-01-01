import React from 'react'

import { Link } from 'react-router-dom'

import useDateParser from '../../../hooks/useDateParser'
import { FaInfoCircle } from 'react-icons/fa'

const AttendeesCards = ({ props }) => {
    return (
        <tr className='card-h animated--grow-in slideInDown'>
            <td>{`${props?.surname || ''} ${props?.other_name || ''}`} </td>
            <td>{props?.id}</td>
            <td>{props?.cys_code}</td>
            <td>  {`${props?.age_bracket}`}</td>
            <td>{props?.town_of_residence}</td>
            <td className='noOutline d-flex p-2'>
                <Link to={`/admin/attendees/attendee/${props?.id}` || ''} className=" noDec my-auto aPro p-3 ml-auto mr-auto noOutLine">
                    <FaInfoCircle className='fs-' />
                </Link>
            </td>
        </tr>

    )
}

export default AttendeesCards