import React, { useState } from 'react'

import Card from '../../components/card/Card'
import CardHeader from '../../components/card/CardHeader'
import CardBody from '../../components/card/CardBody'
import AttendeesCards from './attendees/AttendeesCards'

import Search from './attendees/Search'

import { useAuthContext } from '../../State/AuthContext'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineReload } from 'react-icons/ai'
import theme from '../../theme'
import api from '../../../api/api'
import { toast } from 'react-toastify'

const Attendees = () => {
  const { attendees, setAttendees } = useAuthContext()
  const palate = theme()

  const [atts, setAtts] = useState(attendees)
  const [header, setHeader] = useState(`All Attendees: ${atts?.length || attendees?.length}`)
  const [bodyTxt, setBodyTxt] = useState(`All attendees should show here`)
  const [isSearching, setIsSearching] = useState(false)


  return (
    <div className={`container-fluid`}>
      {/* <!-- Page Heading --> */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0">
          Attendees
        </h1>
        <div className='blog my-0 py-0'>
          {
            isSearching && <Search className={`${isSearching && 'd-block '} sidenav shadow-sm br-3  animated--grow-in 
            searchContainer mr-auto ml-auto hasMaxHeight`}
              class={`backdopProMaxSupra text-gray-200 row container p-5 d-lg-none`}
              recentClassName={`col-md-6`}
              optionsClassName={`col-md-6`}
              setAttendees={setAtts}
              setIsSearching={setIsSearching}
              setHeader={setHeader}
              setBodyTxt={setBodyTxt}
              attendees={atts} />
          }
        </div>
        <div className='ml-auto '>
          <a href={`#search`} className='text-gray-700 p-1 br-3 card' onClick={() => setIsSearching(prev => !prev)}>
            <FaSearch className='h4 m-0 linkPro btn-link ' />
          </a>
        </div>
        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
      </div>

      <div className="row pt-0 blog">
        <div className="col-lg-8">
          <Card className={`p-0 animated--grow-in shadow-sm`} style={{
            backgroundColor: palate.background.default,
            color: palate.neutral.light
          }}>
            <CardHeader className={`d-flex`}>
              <b className='fs'> {header}</b>
              <a className='p-0 br-3 card ml-auto mr-2' style={{
                border: `1px solid rgba(100,100,100,0.2)`
              }}
                aria-details='Refresh list'
                onClick={() => {
                  toast(`fetching...`, {
                    style: {
                      backgroundColor: palate.background.default,
                      color: palate.neutral.light
                    },
                    position: 'top-center'
                  })
                  api.get('/reg/attendance')
                    .then(res => {
                      setAttendees(res.data)
                      toast.success(`Updated`, {
                        style: {
                          backgroundColor: palate.background.default,
                          color: palate.neutral.light
                        },
                        position: 'top-center'
                      })
                      setHeader(`All Attendees: ${res.data?.length || attendees?.length}`)
                      setAtts(res.data)
                    })
                    .catch(err => {
                      console.error(`ERROR: ${err}`)
                      toast.error(`ERROR: ${err}`, {
                        style: {
                          backgroundColor: palate.background.default,
                          color: palate.neutral.light
                        },
                        position: 'top-center'
                      })
                      setAtts(attendees)
                    })
                }}>
                <AiOutlineReload className='h4 m-1  btn-link fs-5 reload' />
              </a>
            </CardHeader>
            <CardBody className={`p-0`}>
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>ID</th>
                      <th>CYS_CODE</th>
                      <th>Date Of Birth</th>
                      <th>Town</th>
                      <th>More</th>
                    </tr>
                  </thead>
                  <tbody>
                    {atts.length ?
                      atts.map((at, i) => (
                        <AttendeesCards key={i}
                          props={at} />
                      ))
                      : <tr className='container d-flex py-3'>{bodyTxt}</tr>
                    }
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>
        <Search className={`d-none d-lg-block sidenav shadow-sm br-3 animated--grow-in `}
          class={`pl-3 col-lg-4`}
          setAttendees={setAtts}
          setIsSearching={setIsSearching}
          setHeader={setHeader}
          setBodyTxt={setBodyTxt}
          attendees={atts} />
      </div >
    </div >
  )
}

export default Attendees