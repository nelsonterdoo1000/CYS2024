import React from 'react'

const MessageLi = (props) => {
    return <>
        <div className="dropdown-item" href="#">
                    <div>
                <div className="text-truncate">
                    {
                        props?.body
                    }
                </div>
                <div className="small text-gray-500">
                    {
                        props.alt
                    }
                </div>
            </div>
        </div>
    </>
}

export default MessageLi