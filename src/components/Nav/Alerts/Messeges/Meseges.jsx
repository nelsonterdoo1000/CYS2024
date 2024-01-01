import { useState } from "react"
import MessageLi from "./MessageLi"
import { FaFacebookMessenger } from "react-icons/fa"

const Meseges = (props) => {
    const [isShown, setIsShown] = useState(false)

    const messages = [
        {
            img: '',
            body: "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good",
            alt: "Chicken sause"
        }
    ]

    return <>
        {/* <!-- Nav Item - Messages --> */}
        <div className="p-2" onClick={() => {
            setIsShown(prev => !prev)
        }}>
            {/* <!-- Counter - Messages --> */}
            <FaFacebookMessenger className="fs-5 icon text-gray-500" /> {props?.children}
        </div>
        {
            isShown &&
            <>
                <div className='backdopProMax'
                    onClick={() => {
                        setIsShown(false)
                    }}>
                </div>
                <div className="dropdown animated--grow-in" aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                        Message Center
                    </h6>
                    {
                        messages.length ?
                            messages.map(msg => (
                                <MessageLi key={msg}
                                    body={msg.body}
                                    alt={msg.alt} />
                            ))
                            :
                            "Your messages should show here"
                    }
                    <div className="dropdown-item dropDownBtn small text-gray-500" href="#">Read More Messages</div>
                </div>
            </>
        }
    </>
}

export default Meseges