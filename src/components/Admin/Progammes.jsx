import React, { useState } from 'react'

import Card from '../../components/card/Card'
import CardHeader from '../../components/card/CardHeader'
import CardBody from '../../components/card/CardBody'
import ProgramsCard from './programs/ProgramsCard'

import Search from './programs/Search'

import { useAuthContext } from '../../State/AuthContext'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { AiOutlineReload } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import theme from '../../theme'
import api from '../../../api/api'
import { toast } from 'react-toastify'

const Progammes = () => {
    const { programmes } = useAuthContext()
    const palate = theme()

    const [programs, setPrograms] = useState(programmes)
    const [header, setHeader] = useState('All programmes: ' + programs.length)
    const [bodyTxt, setBodyTxT] = useState('All programmes should show here')
    const [isSearching, setIsSearching] = useState(false)

    return (
        <div className={`container-fluid`}>
            {/* <!-- Page Heading --> */}
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0">
                    Programmes
                </h1>
                <div className='blog my-0 py-0'>
                    {
                        isSearching && <Search className={`${isSearching && 'd-block '} sidenav shadow-sm br-3  animated--grow-in 
            searchContainer mr-auto ml-auto hasMaxHeight mt-5`}
                            class={`backdopProMaxSupra text-gray-200 row container p-5 d-lg-none`}
                            recentClassName={`build`}
                            setIsSearching={setIsSearching}
                            setPrograms={setPrograms}
                            setHeader={setHeader}
                            setBodyTxT={setBodyTxT} />
                    }
                </div>
                <div className='ml-auto '>
                    <a href={`#search`} className='p-1 br-3 card' onClick={() => setIsSearching(prev => !prev)}>
                        <FaSearch className='h4 m-0 linkPro btn-link ' />
                    </a>
                </div>
                {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
            </div>

            <div className="row pt-0 blog">
                <div className="col-lg-8">
                    <Card className={`p-0 animated--grow-in`} style={{
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light
                    }}>
                        <CardHeader className={`d-flex`}>
                            <b className='fs'> {header}</b>
                            <div className='ml-auto d-flex'>
                                <Link to={`/admin/programmes/createNew`}
                                    style={{
                                        border: `1px solid rgba(100,100,100,0.3)`
                                    }}
                                    className='p-1 br-3 card '
                                    aria-details='Create a programme'
                                    onClick={() => setIsSearching(prev => !prev)}>
                                    <FaPlus className='h4 m-0  btn-link fs-5' />
                                </Link>

                                <a className='p-0 br-3 card ml-2 mr-3' style={{
                                    border: `1px solid rgba(100,100,100,0.3)`
                                }}
                                    aria-details='Create a programme'
                                    onClick={() => {
                                        toast(`Fetching`, {
                                            style: {
                                                backgroundColor: palate.background.default,
                                                color: palate.neutral.light
                                            },
                                            position: 'top-center'
                                        })
                                        api.get('/program/all')
                                            .then(res => {
                                                toast.success(`Updated`, {
                                                    style: {
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    },
                                                    position: 'top-center'
                                                })
                                                setPrograms(res.data)
                                                setHeader(`All programmes: ${res.data?.length}`)
                                                setBodyTxT(`All programmes should show here`)
                                            })
                                            .catch(err => {
                                                console.error(`ERROR: ${err}`)
                                                setPrograms(programmes)
                                                setHeader(`All programmes: ${programmes?.length}`)
                                                setBodyTxT(`All programmes should show here`)
                                                toast.error(`ERROR: ${err}`, {
                                                    style: {
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    },
                                                    position: 'top-center'
                                                })
                                            })
                                    }}>
                                    <AiOutlineReload className='h4 m-1  btn-link fs-5 reload' />
                                </a>
                            </div>
                        </CardHeader>
                        <CardBody className={`p-0`}>
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>ID</th>
                                            <th>Theme</th>
                                            <th>Starts at</th>
                                            <th>Ends at</th>
                                            <th>More</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            programs.length ?
                                                programs.map((prog, i) => (
                                                    <ProgramsCard key={i}
                                                        props={prog} />
                                                ))
                                                : <tr className='container py-3 d-flex'>{bodyTxt}</tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <Search className={`d-none d-lg-block sidenav shadow-sm br-3 animated--grow-in `}
                    class={`pl-3 col-lg-4`}
                    setPrograms={setPrograms}
                    setIsSearching={setIsSearching}
                    setHeader={setHeader}
                    setBodyTxT={setBodyTxT} />
            </div >
        </div >
    )
}

export default Progammes