import React from 'react'
import NavigateLi from './NavigateLi'
import theme from '../../../theme'
import { useAuthContext } from '../../../State/AuthContext'

const NavigateDropDown = ({ setIsShown }) => {
    const palate = theme()
    const { user } = useAuthContext()

    const admin = user?.user_type == 'admin' ? {
        text: 'Admin',
        description: 'The administrator page',
        where: '/Admin'
    }
        : {}
    const places = [
        {
            text: 'Home',
            description: 'Our landing page',
            where: '/'
        }, {
            text: 'Explore',
            description: 'Our utillity page',
            where: '/explore'
        }, {
            text: 'About',
            description: 'Our About page',
            where: '/about'
        },
        admin
    ]
    return (
        <>

            <div className='backdopProMax'
                onClick={() => {
                    setIsShown(prev => !prev)
                }}>
            </div>
            <div className="dropdown animated--grow-in " aria-labelledby="" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <h6 className="dropdown-header text-truncate fs" style={{
                    borderBottom: `1px solid rgba(100,100,100,0.2)`
                }}>
                    Looking for direction?
                </h6>
                {
                    places.map((place, i) => (
                        <NavigateLi key={i}
                            where={place?.where}
                            text={place?.text}
                            description={place?.description}
                            onClick={() => {
                                setIsShown(prev => !prev)
                            }} />
                    ))
                }
                <hr className='mb-0' />
            </div>
        </>
    )
}

export default NavigateDropDown