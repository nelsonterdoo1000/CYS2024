import React, { createContext, useContext, useEffect, useState } from "react"
import api from "../../api/api";
const context = createContext();

export const AuthContext = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('uid')))

    const [attendees, setAttendees] = useState([])
    const [programmes, setProgrammes] = useState([])
    const [selected, setSelected] = useState([])

    useEffect(() => {
        const controller = new AbortController()
        const runAutoAuth = () => {
            try {
                api.get(`/reg/view-attendee/${user.id}`)
                    .then(response => {
                        setUser(prev => ({ ...prev, access_token: user?.token, user_id: response.data.data.id, resUser: response.data.data }))
                    }).catch(err => console.error(`ERROR: ${err}`))
            } catch (err) {
                console.err(err)
            }
        }

        user?.id && runAutoAuth()

        api.get('/program/all')
            .then(res => {
                setProgrammes(res.data)
            })
            .catch(err => {
                console.error(`ERROR: ${err}`)
            })

        api.get('/reg/attendance')
            .then(res => {
                setAttendees(res.data)
            })
            .catch(err => {
                console.error(`ERROR: ${err}`)
            })

        return () => {
            controller.abort()
        }
    }, [])


    useEffect(() => {
        user?.resUser && localStorage.setItem('uid', JSON.stringify({ id: user?.id, user_type: user?.user_type } || {}))
    }, [user])

    return (
        <context.Provider
            value={{
                attendees,
                setAttendees,
                programmes,
                setProgrammes,
                selected,
                setSelected,
                user,
                setUser
            }}>
            {children}
        </context.Provider>
    )
}

export const useAuthContext = () => useContext(context) 