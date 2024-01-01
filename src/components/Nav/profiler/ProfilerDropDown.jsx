import React from 'react'
import theme from '../../../theme'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../../State/StateContext'
import { FaAdjust, FaCheckDouble, FaUserCircle } from 'react-icons/fa'
import { useAuthContext } from '../../../State/AuthContext'

const ProfilerDropDown = (props) => {
    const { setMode } = useStateContext()
    const { user } = useAuthContext()

    const palate = theme()

    const fixMode = () => {
        setMode(prev => {
            return prev == 'light' ? 'dark' : 'light'
        })
    }

    return (
        <>
            {/* <!-- Dropdown - User Information --> */}
            < div className="dropdown mt-1 animated--grow-in" aria-labelledby="userDropdown" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <h6 className='dropdown-header fs text-truncate' style={{
                    borderBottom: `1px solid rgba(100,100,100,0.2)`
                }}>
                    Action center
                </h6>

                <Link to={'explore/my-profile'} className="dropdown-item" onClick={props.onClick}>
                    <FaUserCircle className='mb-1 fs text-truncate' />  Profile
                </Link>

                <div className="dropdown-item" onClick={() => {
                    props.onClick()
                    fixMode()
                }}>
                    <div className="text-truncate" onClick={props.onClick}>
                        <FaAdjust className='mb-1' />  Toggle theme
                    </div>
                </div>

                {user?.resUser ?
                    <Link to={'explore/my-profile'} onClick={props.onClick}
                        style={{
                            color: palate.neutral.light
                        }}>
                        <div className="dropdown-item dropDownBtn br-3" >
                            Logout
                        </div>
                    </Link>
                    :
                    <Link to={'reg/login'} onClick={props.onClick}
                        style={{
                            color: palate.neutral.light
                        }}>
                        <div className="dropdown-item dropDownBtn br-3" >
                            Login
                        </div>
                    </Link>
                }
            </div >
        </>
    )
}

export default ProfilerDropDown