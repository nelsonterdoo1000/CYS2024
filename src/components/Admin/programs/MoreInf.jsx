import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import AttSearch from './AttSearch'
import AttendeesCards from '../attendees/AttendeesCards'
import { AiOutlineReload } from 'react-icons/ai'
import api from '../../../../api/api'
import { toast } from 'react-toastify'
import theme from '../../../theme'

const MoreInf = ({ props }) => {
    const [isSearching, setIsSearching] = useState(false)
    const palate = theme()
    const [attendees, setAttendees] = useState(props?.attendees || [])
    const [header, setHeader] = useState(`Attendees: ${attendees?.length}`)
    const [bodyTxt, setBodyTxt] = useState(`All attendees for this programme should show here`)


    useEffect(() => {
        setAttendees(props?.attendees)
        setHeader(`Attendees: ${props?.attendees?.length || attendees?.length}`)
        api.get(`/program/get-attendees`)
            .then(res => setAttendees(res.data))
    }, [props?.attendees])
    return (
        <div className="col-lg-7 blog pt-0 pl-lg-3">
            {
                isSearching && <div className="col-lg-7">
                    <AttSearch className={`${isSearching && 'd-block '} sidenav bg-light shadow br-3  animated--grow-in searchContainer mr-auto ml-auto hasMaxHeight col-lg-7`}
                        class={`backdopProMaxSupra text-gray-200 container-fluid p-5 justify-content-center`}
                        recentClassName={`col-md-6`}
                        optionsClassName={`col-md-6`}
                        attendees={attendees}
                        setHeader={setHeader}
                        setBodyTxt={setBodyTxt}
                        setAttendees={setAttendees}
                        setIsSearching={setIsSearching} />

                </div>
            }
            <div className="card p-0 animated--grow-in shadow-sm br-3 mb-3" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <div className='p-3 border-bottom d-flex text-bold'>
                    <div className="my-auto">
                        {header}
                    </div>
                    <hr className='m-0 p-0' style={{
                        borderColor: palate.neutral.light
                    }} />
                    <div className='ml-auto d-flex'>
                        <a href={`#search`} className='text-gray-700 p-1 br-3 card' onClick={() => setIsSearching(prev => !prev)}>
                            <FaSearch className='h4 m-0 btn-link my-auto' />
                        </a>
                        <a className='text-gray-700 p-1 br-3 card ml-2'
                            aria-aria-describedby='Refresh attendees list'
                            onClick={() => {
                                toast(`fetching...`, {
                                    position: 'top-center'
                                })
                                api.get(`/program/get-attendees`)
                                    .then(res => {
                                        setAttendees(res.data)
                                        setHeader(`All Attendees: ${res.data.length}`)
                                        setBodyTxt(`All Attendees should show here`)
                                    })
                                    .catch(err => {
                                        console.error(`ERROR: ${err}`)
                                        setAttendees(props.attendees)
                                        setHeader(`All Attendees: ${props.attendees?.length}`)
                                        setBodyTxt(`All programmes should show here`)
                                    })
                            }}>
                            <AiOutlineReload className='h4 m-1 btn-link fs-5 reload' />
                        </a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>CYS_CODE</th>
                                    <th>Date of Birth</th>
                                    <th>Town</th>
                                    <th>More</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attendees?.length ?
                                    attendees?.map((at, i) => (
                                        <AttendeesCards key={i}
                                            props={at} />
                                    ))
                                    : <tr className='container py-3 d-flex'>
                                        <td className='border-0 p-0'>{bodyTxt}</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card p-0 animated--grow-in shadow-sm br-3" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <div className='p-3 border-bottom d-flex text-bold'>
                    Read more
                    <hr className='m-0 p-0' />
                </div>
                <div className="card-body">
                    {props?.description}
                </div>
            </div>
        </div >
    )
}

export default MoreInf