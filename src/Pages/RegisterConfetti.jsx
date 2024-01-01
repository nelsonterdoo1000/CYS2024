import React from 'react'

import { useStateContext } from '../State/StateContext'
import { useAuthContext } from '../State/AuthContext'

import { Link } from 'react-router-dom'
import { FaCheck, FaCopy, FaHome } from 'react-icons/fa'
import theme from '../theme'
import { toast } from 'react-toastify'

const RegisterConfetti = () => {
    const palate = theme()
    const { setTitle } = useStateContext()
    const { user } = useAuthContext()

    React.useEffect(() => {
        setTitle('NewInstanceHandler')
    }, [])

    return (
        <div className="row no-gutters justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9 container p-3">

                <div className="card o-hidden border-0 shadow-sm my-5 p-0 br-3">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row no-gutters p-0" style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>
                            <div className="col-lg-6 bg-danger d-flex py-5 pl-0 pr-0 pic">
                                <img src="/assets/shield.svg" alt="" className='img-fluid m-auto' />
                            </div>
                            <div className="col-lg-6">
                                <div className="container-fluid py-5 ">
                                    <div>
                                        <h1 className='m-auto py-4 col--10 mb-5'>
                                            Hi {user?.surname || user?.altName} ,<br />
                                            Your CYS_CODE is
                                            <span className="text-gray-300 d-inline ml-2 br-3 bg-gradient-danger btn fs-3 card card noOutline icon btn-icon-split py-0 pr-0"
                                                aria-describedby='Copy to clipboard'>
                                                <span className="text">
                                                    {user?.cys_code || user?.someAlt}
                                                </span>
                                                <span className="bg-danger pl-2 pr-2" onClick={() => {
                                                    navigator.clipboard.writeText(user?.cys_code || user?.someAlt)
                                                    toast(`"${user?.cys_code || user?.someAlt}" copied to clipboard`, {
                                                        position: 'top-center'
                                                    })
                                                }}>
                                                    <FaCopy className='icon p-0 bg-danger mb-1' />
                                                </span>
                                            </span>
                                        </h1>
                                    </div>
                                    <form className="text-gray-600 pt-0">
                                        <div className='fs-6'>
                                            Your CYS_CODE is your user name, Please keep it safe
                                        </div>

                                        <div className='row col-sm-10 m-auto m-sm-0 p-0 pt-4'>
                                            <div className='col-sm-6 row '>
                                                <Link to={`/reg/login`} className='btn btn-danger'>
                                                    <FaCheck className='icon p-0' /> Login
                                                </Link>
                                            </div>
                                            <div className='col-sm-6 row ml-sm-2'>
                                                <Link to={`/`} className='btn text-gray-700 bg-light noOutline'>
                                                    <FaHome className='icon p-0' /> Home
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default RegisterConfetti 