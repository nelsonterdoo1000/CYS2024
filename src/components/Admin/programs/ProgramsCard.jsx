import React from 'react'

import { Link } from 'react-router-dom'

import useDateParser from '../../../hooks/useDateParser'
import { FaInfoCircle } from 'react-icons/fa'
import theme from '../../../theme'

const ProgramsCard = ({ props }) => {
    const palate = theme()
    return (
        <tr className='card-h animated--fade-in slideInDown' style={{
            color: palate.neutral.light,
        }}>
            <td>{`${props?.name || ''} `} </td>
            <td>{props?.id}</td>
            <td>{props?.theme}</td>
            <td>  {`${useDateParser(props?.start_datetime || '')} `}</td>
            <td>{useDateParser(props?.end_datetime || '')}</td>
            <td className='noOutline d-flex p-2'>
                <Link to={`/admin/programmes/program/${props?.id}` || ''} className=" noDec my-auto aPro p-3 ml-auto mr-auto noOutLine">
                    <FaInfoCircle className='fs-' />
                </Link>
            </td>
        </tr>
    )
}

export default ProgramsCard