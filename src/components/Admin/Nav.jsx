import React, { useState } from 'react'
import { FaArrowLeft, FaChevronDown } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import theme from '../../theme'

const Nav = () => {
    const [isShown, setIsShown] = useState(false)
    const navigate = useNavigate()
    const palate = theme()

    const { pathname } = useLocation()
    const res = pathname.slice(7)

    const where = (what) => {
        let det = Boolean(pathname.indexOf(what) > -1)
        return det
    }


    return (
        <nav className="nav top-bar py-2 mb-4 shadow-sm pl-3  pr-3 stickyTop" style={{
            backgroundColor: palate.background.alt,
            color: palate.neutral.light
        }}>
            <button className='btn navProImg noOutline fs-6 bg-danger text-gray-200 m-pro d-flex'
                onClick={() => navigate(-1)} >
                <FaArrowLeft className='my-auto' />
            </button>
            {/* <!-- Topbar Search --> */}
            {/* Invisible on medium screens*/}
            <div className='ml-auto navbar-body animated--grow-in d-sm-none'>
                <div className='ml-1 d-flex'>
                    <li className='p-2 my-auto'
                        onClick={() => setIsShown(prev => !prev)}>
                        <FaChevronDown className='icon text-gray-500 fs-5' />
                    </li>
                    {isShown &&
                        <>
                            <div className='backdopProMax '
                                onClick={() => {
                                    setIsShown(prev => !prev)
                                }}>
                            </div>
                            <div className='dropdown animated--grow-in'
                                style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}>
                                <Link to={``} onClick={() => {
                                    setIsShown(prev => !prev)
                                }}>
                                    <li className='p-1  mr-1 ml-1'>
                                        <span className='my-auto text-gray- ml-1 w-auto'>Dashboard</span>
                                    </li>
                                </Link>
                                <div className='divider'></div>
                                <Link to={`attendees`} onClick={() => {
                                    setIsShown(prev => !prev)
                                }}>
                                    <li className='p-1  mr-1 ml-1'>
                                        <span className='my-auto text-gray- ml-1'>Attendees</span>
                                    </li>
                                </Link>
                                <Link to={`programmes`} onClick={() => {
                                    setIsShown(prev => !prev)
                                }}>
                                    <li className='p-1  mr-1 ml-1'>
                                        <span className='my-auto text-gray- ml-1'>Programmes</span>
                                    </li>
                                </Link>
                                {/* <Link to={`blog`} onClick={() => {
                                    setIsShown(prev => !prev)
                                }}>
                                    <li className='p-1  mr-1 ml-1'>
                                        <span className='my-auto text-gray- ml-1'>Blog</span>
                                    </li>
                                </Link> */}
                            </div>
                        </>
                    }
                </div>
            </div>

            <div className="ml-auto navbar-body no-gutters text-gray-700 d-none d-sm-flex">
                <Link to={``} className={`noDec aPro ${res == "" && "navSelected"} p-0 mr-1 ml-1 `}>
                    <li className='d-non d-sm-bloc'>
                        Dashboard
                    </li>
                </Link>
                <div className="navbar-body">
                    <Link to={`attendees`} className={`noDec aPro ${where("attendees") && "navSelected"} p-0 mr-1 ml-1 `}>
                        <li className='d-non d-sm-bloc'>
                            Attendees
                        </li>
                    </Link>
                </div>
                <div className="navbar-body">
                    <Link to={`programmes`} className={`noDec aPro ${where("programmes") && "navSelected"} p-0 mr-1 ml-1 `}>
                        <li className='d-non d-sm-bloc'>
                            Programmes
                        </li>
                    </Link>
                </div>
                {/* <div className="navbar-body">
                    <Link to={`blog`} className={`noDec aPro ${where("blog") && "navSelected"} p-0 mr-1 ml-1 `}>
                        <li className='d-non d-sm-bloc'>
                            Blog
                        </li>
                    </Link>
                </div> */}
            </div>
        </nav>
    )
}

export default Nav