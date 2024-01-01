import React, { useEffect } from 'react'
import SideNav from '../components/explore/SideNav'
import { useStateContext } from '../State/StateContext'
import { Outlet } from 'react-router-dom'
import { useAuthContext } from '../State/AuthContext'
import { FaAngleDoubleUp } from 'react-icons/fa'

const Explore = () => {
    const { setTitle, isSmall } = useStateContext()
    const { user } = useAuthContext()

    useEffect(() => {
        setTitle("Explore")
    }, [])

    return (
        <>
            <nav className='sideNav'>
                <SideNav />
            </nav>
            <section className={`main ${isSmall ? 'mainOnSmall' : 'mainOnLarge'} row`}>
                <Outlet />
                {/* <a href="#" className="d-flex m-auto d-block  mt-auto ">
                    <span className="m-auto">
                        <FaAngleDoubleUp className='icon'/> Top
                    </span>
                </a> */}
            </section>
        </>
    )
}

export default Explore