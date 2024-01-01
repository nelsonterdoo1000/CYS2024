import React, { useState } from 'react'
import NavigateDropDown from './NavigateDropDown'
import { FaCompass } from 'react-icons/fa'

const Navigate = (props) => {
    const [isShown, setIsShown] = useState(false)

    return (
        <>
            <div className='p-2' onClick={() => setIsShown(prev => !prev)}>
                <FaCompass className='icon text-gray-500 fs-5' /> {props?.children}
            </div>
            {isShown &&
                <NavigateDropDown setIsShown={setIsShown} isShown={isShown} />
            }

        </>
    )
}

export default Navigate