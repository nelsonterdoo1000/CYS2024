import React, { createContext, useContext, useEffect, useState } from "react"
import api from "../../api/api";
import { programmesSchema } from "../assets/schemas";

const context = createContext();

export const StateContext = ({ children }) => {
    const [isSmall, setIsSmall] = useState(false)
    const [title, setTitle] = useState("")
    const [sideNavSelected, setSideNavSelected] = useState("")

    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')) || 'light')

    const [isNav2Selected, setIsNav2Selected] = useState("")

    const [notifications, setNotifications] = useState([])

    const [programmes, setProgrammes] = useState(programmesSchema.programmes)

    const [search, setSearch] = useState(false)

    const toggleSide = () => {
        setIsSmall(prev => !prev)
    }

    const isItOnGoing = (program) => {
        const { end_datetime, start_datetime } = program;
        const date = new Date()
        const isThisYear = Number(end_datetime.slice(0, 4)) >= date.getFullYear()

        const isThisMonth = Number(end_datetime.slice(5, 7)) >= date.getMonth() + 1

        const isToday = Number(end_datetime.slice(8)) >= date.getDate() &&
            Number(start_datetime.slice(8)) <= date.getDate()

        const amIOngoing = isThisYear && isThisMonth && isToday

        return amIOngoing
    }

    const isOnGoing = programmes?.filter(program => isItOnGoing(program))

    const [selected, setSelected] = useState(isOnGoing[isItOnGoing.length - 1]?.id || programmes[programmes.length - 1]?.id)

    useEffect(() => {
        const controller = new AbortController()
        const getProgrammes = async () => {
            try {
                const res = await api.get('/program/all')
                setProgrammes(res.data)
            } catch (err) {
                console.error(`ERROR: ${err}`)
            }
        }
        getProgrammes()

        return () => {
            controller.abort()
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode))
    }, [mode])

    return (
        <context.Provider
            value={{
                isSmall,
                setIsSmall,
                title: title,
                setTitle,
                programmes,
                setProgrammes,
                sideNavSelected,
                setSideNavSelected,
                toggleSide,
                isNav2Selected,
                setIsNav2Selected,
                search,
                setSearch,
                mode,
                setMode,
                notifications,
                selected,
                setSelected
            }}>
            {children}
        </context.Provider>
    )
}

export const useStateContext = () => useContext(context) 