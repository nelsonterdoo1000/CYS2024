import React from 'react'
import TopLinkInfCard from '../Admin/TopLinkInfCard'

import { FaBlog, FaMap, FaMapMarked, FaPlus, FaUserAlt } from 'react-icons/fa'
import Card from '../../components/card/Card'
import CardHeader from '../../components/card/CardHeader'
import CardBody from '../../components/card/CardBody'

import UpComing from '../../components/programs/filters/upComing'

import { useAuthContext } from '../../State/AuthContext'
import { Link } from 'react-router-dom'
import { whenWillI } from '../../hooks/timeSpaces'

const AdminDashboard = () => {
  const { attendees, programmes } = useAuthContext()
  
  const upComing = () => {
    const yetTo = programmes?.filter(prog => whenWillI(prog).indexOf('remaining') > -1
    )
    return yetTo
}

  const yetOn = upComing()

  const isItOnGoing = (program) => {
    const { end_datetime, start_datetime } = program;
    const date = new Date()
    const isThisYear = Number(end_datetime.slice(0, 4)) >= date.getFullYear()

    const isThisMonth = Number(end_datetime.slice(5, 7)) >= date.getMonth() + 1

    const isToday = Number(end_datetime.slice(8)) >= date.getDate() &&
      Number(start_datetime.slice(8)) <= date.getDate()

    const amIOngoing = isThisYear && isThisMonth && isToday

    return amIOngoing
  }

  const isOnGoing = programmes.filter(program => isItOnGoing(program))

  return (
    <div className="container-fluid">

      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0">Administrator</h1>
        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
      </div>

      {/* <!--First row of cards --> */}
      <div className="row animated--grow-in slideInUp">
        <TopLinkInfCard color={``} title={`Attendees`} body={`${attendees?.length}`} icon={<FaUserAlt className='fs-5' />} />
        <TopLinkInfCard color={`success`} title={`programmes`} body={`${programmes?.length}`} icon={<FaMap className='fs-5' />} />
        <TopLinkInfCard color={`success`} title={`Ongoing programmes`} body={`${isOnGoing.length}`} icon={<FaMapMarked />} />
        {/* <TopLinkInfCard color={``} title={`Blog`} body={`${blog?.length}`} icon={<FaBlog className='fs-5' />} /> */}
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">

        {/* <!-- Content Column --> */}
        <div className="col-12 mb-4  animated--grow-in">
          {/* <!-- Project Card Example --> */}
          <UpComing programs={yetOn.slice(0, 4)} options={
            <Link to={`/admin/programmes`} className={`btn btn-danger p-1 h-link my-auto `}>
              Go to
            </Link>} />
        </div>

        {/* <div className="col-md-6 animated--grow-in pt-3">
          <Card className={`shadow-sm`} style={{
            backgroundColor: palate.background.default,
            color: palate.neutral.light
          }}>
            <CardHeader className={`d-flex`}>
              <span className="my-auto fs">  Notifications </span>
              <Link href={''} className='text-gray-700 p-1 br-3 card ml-auto'>
                <FaPlus className='h4 m-0 linkPro btn-link d-block' />
              </Link>
            </CardHeader>
            <CardBody >

            </CardBody>
          </Card>
        </div> */}
      </div>

    </div>
  )
}

export default AdminDashboard