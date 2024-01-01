import React, { useState } from 'react'
import AlertsLi from './AlertsLi'
import { FaBell } from 'react-icons/fa'
import { useStateContext } from '../../../State/StateContext'
import { Link } from 'react-router-dom'
import theme from '../../../theme'

const NavAlerts = (props) => {
    const [isShown, setIsShown] = useState(false)
    const palate = theme()
    const { notifications } = useStateContext()

    return <>
        <div className="p-2" onClick={() => {
            setIsShown(prev => !prev)
        }}>
            <FaBell className='icon text-gray-500 fs-5' /> {props?.children}
        </div>
        {isShown &&
            <div >
                <div className='backdopProMax'
                    onClick={() => {
                        setIsShown(false)
                    }}>
                </div>
                <div className="dropdown animated--grow-in" aria-labelledby="alertsDropdown" style={{
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }}>
                    <h6 className="dropdown-header fs " style={{
                borderBottom:`1px solid rgba(100,100,100,0.2)`
            }}>
                        Alerts Center
                    </h6>
                    {notifications.length ?
                        notifications.map((alert, i) => (
                            <AlertsLi key={i}
                                date={alert.date}
                                body={alert.body}
                                onClick={() => setIsShown(false)} />
                        ))
                        : <div className='dropdown-item' onClick={() => setIsShown(false)}>No notifications to display </div>
                    }
                    <Link to={`/explore/#notifications`} className='dropdown-item  small text-center br-3'style={{
                color: palate.neutral.light
            }}
                        onClick={() => setIsShown(false)}>See All</Link>
                </div>
            </div>
        }
    </>

}

export default NavAlerts