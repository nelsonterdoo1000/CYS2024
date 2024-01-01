import { FaClipboard, FaDraftingCompass, FaHome } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../State/AuthContext'
import theme from '../theme'

const LoginConfetti = () => {
    const { user } = useAuthContext()
    const palate = theme()

    return (
        <div className="row no-gutters justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9 container p-3 ">

                <div className="card o-hidden border-0 shadow-sm my-5 p-0 br-3" style={{

                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }}>
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row no-gutters p-0">
                            <div className="col-lg-6 bg-danger py-5  d-flex">
                                <img src="/assets/success.svg" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-6">
                                <div className="container-fluid py-5">
                                    <div>
                                        <h1 className="">Welcome Back {user?.resUser?.surname}!<br />
                                            <span className='fs-3'>What an awsome sight to behold</span>
                                        </h1>
                                    </div>
                                    <form className="pt-0">
                                        <div className='fs-6 pt-4'>
                                            Continue the rest of your day with a heart of joy
                                        </div>
                                        <div className='row col-sm-10 m-auto m-sm-0 p-0 pt-4'>
                                            <div className=' col-sm-6 row'>
                                                <Link to={`/`} className='btn btn-danger'>
                                                    <FaHome className='icon p-0' /> Home
                                                </Link>
                                            </div>
                                            <div className='col-sm-6 row ml-sm-2'>
                                                <Link to={`/explore`} className='btn text-gray-700 bg-light noOutline'>
                                                    <FaDraftingCompass className='icon p-0' /> Explore
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

        </div>
    )
}

export default LoginConfetti