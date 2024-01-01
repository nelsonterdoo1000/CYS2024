import { useState } from 'react'
import React from 'react'
import ProfilerDropDown from './ProfilerDropDown'
import { useAuthContext } from '../../../State/AuthContext'

const Profile = () => {
    const [isShown, setIsShown] = useState(false)
    const { user } = useAuthContext()
    const resUser = user?.resUser


    return (
        <>
            <div id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="menu" aria-expanded="false"
                onClick={() => {
                    setIsShown(prev => !prev)
                }}>
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{resUser?.surname} {resUser?.other_name}</span>
                <button className="navProImg p-0 noOutline">
                    <img src='/assets/undraw_profile.svg' alt='' />
                </button>
            </div>
            {isShown &&
                <>
                    <div className='backdopProMax'
                        onClick={() => {
                            setIsShown(false)
                        }}>
                    </div>
                    <ProfilerDropDown onClick={() => {
                        setIsShown(false)
                    }} />
                </>
            }
        </>
    )
}

export default Profile