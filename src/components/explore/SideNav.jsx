import React, { useEffect } from 'react'
import { useStateContext } from '../../State/StateContext';
import { Link } from 'react-router-dom';
import { FaChartBar, FaChevronLeft, FaChevronRight, FaUserAlt, FaMap, FaRegIdCard } from 'react-icons/fa';
import theme from '../../theme';
import { useAuthContext } from '../../State/AuthContext';

const SideNav = () => {
    const { isSmall, setIsSmall, sideNavSelected, mode } = useStateContext();
    const { user } = useAuthContext()
    const palate = theme()
    const stI = isSmall ? <FaChevronRight className='icon' /> : <FaChevronLeft className='icon' />
    const layoutHandler = (iw) => {
        if (iw <= 760) {
            setIsSmall(true)
        } else {
            setIsSmall(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => layoutHandler(window.innerWidth))
        layoutHandler(window.innerWidth)
        return () => console.log(window.innerWidth)
    }, [])

    return (<>
        {
            <nav className={`navbar-nav animated--grow-in ${mode !== 'dark' && 'bg-gradient-success'}  sidebar-dark ${isSmall ? 'sideNavMini' : 'sideNavWide'} sideNav`} style={{
                backgroundColor: mode == 'dark' && palate.background.default,
            }}>

                {/* <!-- Sidebar - Brand --> */}
                <Link className="d-flex align-items-center justify-content-center shadow-sm"
                    id='sidebar-brand'
                    to="/" style={{
                        backgroundColor: palate.background.default,
                    }}>
                    <div className="sidebar-brand-icon row d-flex no-gutters m-auto">
                        <img src="/cysm.png" className='fluidPro col-6' alt="" />
                    </div>
                </Link>
                {/* <!-- Divider --> */}
                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Nav Item - Dashboard --> */}
                <div className={`item ${sideNavSelected == 'dash' && `sideNavSelected `}`}>
                    <Link className={`${isSmall ? 'navLinkMini' : 'navLinkMega'} active`} to="">
                        <div className='li'>
                            <FaChartBar className='icon' />
                            <li>Dashboard</li>
                        </div>
                    </Link>
                </div>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Events
                </div>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <div className={`item ${sideNavSelected == 'prog' && `sideNavSelected `}`}>
                    <Link className={`${isSmall ? 'navLinkMini' : 'navLinkMega'}`} to='programs'>
                        <div className="li">
                            <FaMap className='icon' />
                            <li>Programs</li>
                        </div>
                    </Link>
                </div>

                {user?.resUser?.is_registrar &&
                    < div className={`item ${sideNavSelected == 'reg' && `sideNavSelected `}`}>
                        <Link className={`${isSmall ? 'navLinkMini' : 'navLinkMega'}`} to='registration'>
                            <div className="li">
                                <FaRegIdCard className='icon' />
                                <li>Registration</li>
                            </div>
                        </Link>
                    </div>
                }

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    User
                </div>

                <div className={`item ${sideNavSelected == 'prof' && `sideNavSelected `}`}>
                    <Link className={`${isSmall ? 'navLinkMini' : 'navLinkMega'}`} to='my-profile'>
                        <div className="li">
                            <FaUserAlt className='icon' />
                            <li>Profile</li>
                        </div>
                    </Link>
                </div>

                {/* <div className={`item ${sideNavSelected == 'prof' && `sideNavSelected `}`}>
                    <Link className={`${isSmall ? 'navLinkMini' : 'navLinkMega'}`} to='my-profile'>
                        <div className="li">
                            <FaUserCheck className='icon' />
                            <li>Profile</li>
                        </div>
                    </Link>
                </div> */}


                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button id="sideNavToggle" onClick={() => setIsSmall(prev => !prev)}>
                        {stI}
                    </button>
                </div>

                {/* <!-- Sidebar Message --> */}
            </nav >
        }</>
    )
}

export default SideNav