import React, { useState, useEffect } from 'react'
import { useStateContext } from '../State/StateContext'
import { useNavigate, useParams } from 'react-router-dom'
import UpComing from '../components/programs/filters/upComing'
import ThisMonth from '../components/programs/filters/thisMonth'
import ThisYear from '../components/programs/filters/thisYear'
import All from '../components/programs/filters/all'
import OnGoing from '../components/programs/filters/onGoing'
import Search from '../components/search/Search'
import theme from '../theme'
import { toast } from 'react-toastify'
import { AiOutlineReload } from 'react-icons/ai'
import api from '../../api/api'

const Programs = () => {
  const palate = theme()
  const { sort } = useParams()
  const navigate = useNavigate()
  const { search, setSearch, programmes, setProgrammes, setSideNavSelected } = useStateContext()

  useEffect(() => {
    setSideNavSelected('prog')
  }, [])

  const [filterType, setFilterType] = useState(sort)

  const handleFilterChange = ({ target }) => {
    const { value } = target;
    setFilterType(value)
    navigate(value)
  }

  useEffect(() => {
    setFilterType(sort)
    !sort && setFilterType('')
  }, [sort])

  return (
    <div className="mdl-grid mt-0 pt-0">
      <div className="container-fluid pt-0">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 row p-2 mt-0">Programmes
          <div className='isHeaderBtn d-flex'>
            <label className='my-auto'><span className="auto">Filter: </span>
              <select value={filterType} onChange={handleFilterChange} style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
              }}>
                <option value=''>
                  All
                </option>
                <option value='onGoing'>
                  On going
                </option>
                <option value='upComing'>
                  Up coming
                </option>
                <option value='thisMonth'>
                  This Month
                </option>
                <option value='thisYear'>
                  This year
                </option>
              </select>
            </label>


            <div className="dotdotIcon br-3 shadow-sm my-auto ml-1" onClick={() => setSearch(prev => !prev)} style={{
              backgroundColor: palate.background.default,
              color: palate.neutral.light
            }}>🔍 search
            </div>
            <div className='p-0 br-3 d-flex ml-0'
              aria-details='Refresh list'
              onClick={() => {
                toast(`fetching...`, {
                  style: {
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light,
                    border: `1px solid rgba(100,100,100,0.2)`
                  },
                  position: 'top-center'
                })
                api.get('/program/all')
                  .then(res => {
                    setProgrammes(res.data)
                    toast.success(`Updated`, {
                      position: 'top-center'
                    })
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
                  })
              }}>
              <div className='br-3 text-danger shadow-sm fs-5 card m-auto d-flex' style={{
                border: `1px solid rgba(100,100,100,0.2)`,
                backgroundColor: palate.background.default,
                color: palate.neutral.light,
                padding: '2px'
              }}>
                <AiOutlineReload className='reload m-auto' />
              </div>
            </div>
          </div>
        </h1>
        {
          search &&
          <Search />
        }
        <p className="mb-4 animated--grow-in">
          Sorted programmes should show below on cards and if they don't, check your internet connection and click refresh to reload
        </p>

        {/* <!-- Content Row --> */}
        <div className="row">
          {/* <!-- Grow In Utility --> */}
          {
            sort == 'onGoing' && <OnGoing programs={programmes} />
          }
          {
            sort == 'upComing' && <UpComing programs={programmes} />
          }
          {
            sort == 'thisMonth' && <ThisMonth programs={programmes} />
          }
          {
            sort == 'thisYear' && <ThisYear programs={programmes} />
          }
          {
            sort == undefined && <All programs={programmes} />
          }
        </div>
      </div>
    </div>
  )
}

export default Programs