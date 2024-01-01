import React, { useEffect } from 'react'

import { useStateContext } from '../State/StateContext'
import { useAuthContext } from '../State/AuthContext'

import Nav from '../components/Admin/Nav'

import { Outlet } from 'react-router-dom'
import api from '../../api/api'

const Admin = () => {
    const { setTitle } = useStateContext()

    const { setAttendees, setProgrammes } = useAuthContext()

    useEffect(() => {
        const controller = new AbortController();
        setTitle('Admin');

        const getAttendees = async () => {
            try {
                const res = await api.get('/reg/attendance')
                setAttendees(res.data)
            } catch (err) {
                console.error(`ERROR: ${err}`)
            }
        }

        // const getBlog = async () => {
        //     try {
        //         const res = await api.get('/reg/attendees')
        //         await setBlog(res.data)
        //     } catch (err) {
        //         console.error(`ERROR: ${err}`)
        //     }
        // }

        const getProgrammes = async () => {
            try {
                const res = await api.get('/program/all')
                setProgrammes(res.data)
            } catch (err) {
                console.error(`ERROR: ${err}`)
            }
        }
        getAttendees()
        getProgrammes()

        return () => {
            controller.abort()
        }
    }, [])

    return (
        <div id="content" className='admin'>
            <Nav />
            <div className="pl-3 pr-3 z-1 users">
                <Outlet />
            </div>
        </div>
    )
}

export default Admin