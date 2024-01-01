import React from 'react'
// import { FaRoad } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../State/StateContext'
import { FaRoad } from 'react-icons/fa'
import { toast } from 'react-toastify'
import theme from '../theme'

const NotFound = () => {
    const navigate = useNavigate()
    const { setTitle } = useStateContext()

    setTimeout(() => {
        setTitle("...")
    }, 5);

    return (
        <div className='containePro notFound'>
            <h1 className='notFoundHOne d-flex animated--fade-in mt-2'>
                404
                <div>
                    Page not found
                </div>
            </h1>
            <h4>
                <div className='return animated--grow-in' onClick={() => navigate(-1)}>
                    The previous session is just some few yards away
                    <FaRoad className='ml-2' />
                </div>
            </h4>
        </div >
    )
}

export default NotFound