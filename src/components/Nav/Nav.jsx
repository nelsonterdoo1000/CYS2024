import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import NavAlerts from './Alerts/NavAlerts'
import Meseges from './Alerts/Messeges/Meseges'
import Profile from './profiler/Profile'
import { useStateContext } from '../../State/StateContext'
import Navigate from './Navigate/Navigate'
import { FaArrowLeft, FaBars, FaChevronDown } from 'react-icons/fa'
import theme from '../../theme'
import { useAuthContext } from '../../State/AuthContext'

const Nav = () => {
    const palate = theme()
    const { toggleSide, isSmall, title } = useStateContext();
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const [className, setClassName] = useState('navProPax')
    const [isShown, setIsShown] = useState(false)


    setTimeout(() => {
        if (title == '...' || title !== 'Explore') {
            setClassName('navProPax')
        } else {
            if (isSmall) {
                setClassName('navbarWide')
            } else {
                setClassName('navbarSmall')
            }
        }
    }, 5);


    return (
        <nav className={`nav navBar animated--grow-in shadow-sm ${className}`}
            style={{
                backgroundColor: palate.background.default,
                color: palate.primary.main
            }}
        >
            {
                title == 'Explore' ?
                    <div className='navbar-header animated--grow-in'>
                        {/* <!-- Sidebar Toggle (Topbar) --> */}
                        {
                            <div className="d-flex">
                                <button id="sidebarToggleTop" className={`navProImg noOutline shadow-sm outline-danger my-auto ${title == 'Admin' && 'd-none'}`}
                                    onClick={toggleSide}>
                                    <FaBars className='icon fs-5 text-danger' />
                                </button>
                                <button className={`btn navProImg noOutline fs-6 outline-danger  m-pro shadow-sm ml-2 ml-lg-0 my-auto ${title == 'Admin' ? 'd-none' : 'd-flex'}`}
                                    onClick={() => navigate(-1)} >
                                    <FaArrowLeft className='my-auto text-danger' />
                                </button>
                            </div>
                        }
                    </div> :
                    <h4 className='navbar-header d-flex my-auto'>
                        <NavLink to={`/`} className={`d-flex noDec mb-auto`}>
                            <img src="/cysm.png" className='p-0 pr-1' height={`40px`} alt="" />
                            <div className="my-auto d-none d-sm-block"> CYS</div>
                        </NavLink>
                        {title !== 'Home' &&
                            <button className={`btn navProImg noOutline fs-6 outline-danger animated--grow-in slideInRight m-pro shadow-sm ml-2 ml-2 my-auto ${title == 'Admin' ? 'd-none' : 'd-flex'}`}
                                onClick={() => navigate(-1)} >
                                <FaArrowLeft className='my-auto text-danger' />
                            </button>
                        }
                    </h4>
            }

            <div className='ml-auto navbar-body animated--grow-in'>
                <div className='ml-1'>
                    <li className='p-2 aPro'
                        id='nbSmD-show'
                        onClick={() => setIsShown(prev => !prev)}>
                        <FaChevronDown className='icon text-gray-500 fs-5' />
                    </li>
                    {isShown &&
                        <>
                            <div className='backdopProMax'
                                onClick={() => {
                                    setIsShown(false)
                                }}>
                            </div>
                            <div className='animated--grow-in br-3 nbSmD-show'
                                id='micronav'
                                style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}>
                                <li className='p-0 br-3'>
                                    <Navigate>
                                        <span className='my-auto ml-1 w-auto'>Go to</span>
                                    </Navigate>
                                </li>
                                <div className='divider'></div>
                                <li className='p-0 br-3'>
                                    <NavAlerts >
                                        <span className='my-auto ml-1'>Alerts</span>
                                    </NavAlerts>
                                </li>
                                {/* <li className='p-0 br-3'>
                                    <Meseges >
                                        <span className='my-auto ml-1'>Messages</span>
                                    </Meseges>
                                </li> */}
                            </div>
                        </>
                    }
                </div>
                {title?.indexOf('Register') < 0 &&
                    <div id='nbSmD-none'>
                        <Link to={`/`} className={`noDec aPro ${title == "Home" && "navSelected"} p-0 mr-1 ml-1 `}>
                            <li className='d-none d-sm-block'>
                                Home
                            </li>
                        </Link>

                        <Link to={`/about`} className={`noDec aPro ${title == "About" && "navSelected"} p-0 mr-1 ml-1 `}>
                            <li className='d-none d-sm-block'>
                                About
                            </li>
                        </Link>
                        <Link to={`/explore/programs`} className={`noDec aPro ${title == "alt" && "navSelected"} p-0 mr-1 ml-1 `}>
                            <li className='d-none d-sm-block'>
                                Events
                            </li>
                        </Link>
                        {/* <Link to={`/explore/discover`} className={`noDec aPro ${title == "alt" && "navSelected"} p-0 mr-1 ml-1 `}>
                            <li className='d-none d-sm-block'>
                                Articles
                            </li>
                        </Link> */}
                        <Link to={`/#`} className={`noDec aPro ${title == "alt" && "navSelected"} p-0 mr-1 ml-1 `}>
                            <li className='d-none d-sm-block'>
                                Partner
                            </li>
                        </Link>
                        <Link to={`/explore`} className={`noDec aPro ${title == "Explore" && "navSelected"} p-0 mr-1 ml-1 `}>
                            <li className='d-none d-sm-block'>
                                Explore
                            </li>
                        </Link>
                        
                        {user?.user_type == 'admin' &&
                            <Link to={`/admin`} className={`noDec aPro ${title == "Admin" && "navSelected"} p-0 mr-1 ml-1 `}>
                                <li className='d-none d-sm-block'>
                                    Admin
                                </li>
                            </Link>
                        }

                        <li className='p-0 mr-1 ml-1 d-block d-sm-none'>
                            <Navigate />
                        </li>
                        <div className='divider'></div>
                        <li className='p-0 mr-1 ml-1'>
                            <NavAlerts />
                        </li>
                        {/* <li className='p-0 mr-1 ml-1'>
                        <Meseges />
                    </li> */}
                    </div>
                }
                <div className='divider'></div>
                <Profile />
            </div>
        </nav>
    )
}

export default Nav