import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DashAlerts = ({ props }) => {
    const [read, setRead] = useState(JSON.parse(localStorage.getItem('readNotifications')) || [])
    const isRead = read?.find(note => note?.id == props?.id)

    useEffect(() => {
        localStorage.setItem('readNotifications', JSON.stringify(read))
    }, [read])

    return <>
        <div className="" onClick={() => setRead(prev => ([...prev, props]))}>
            <Link to={`${props?.where || '#'}`} className={`noDec card card-h ${!isRead && 'border-left-danger'} pl-3 pr-3`} >
                <div>
                    <div className="text-truncate text-gray-700 ">
                        {
                            props?.body
                        }
                    </div>
                    <div className="small text-gray-500">
                        {
                            props.date
                        }
                    </div>
                </div>
            </Link>
        </div>
    </>
}

export default DashAlerts