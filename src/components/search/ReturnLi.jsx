import theme from '../../theme'
import useDateParser from '../../hooks/useDateParser'
import { useStateContext } from '../../State/StateContext'
import React from 'react'
import { Link } from 'react-router-dom'

const ReturnLi = ({ prog }) => {
  const { setSearch } = useStateContext()
  const palate = theme()
  const {
    name,
    id,
    start_datetime
  } = prog

  return (
    <div className='my-2' style={{
      backgroundColor: palate.background.default,
      color: palate.neutral.light
    }}>
      <Link className='noDec  shadow-sm' to={`/explore/program/${id}`} onClick={() => setSearch(prev => !prev)}>
        <li className='d-flex btn' style={{
          backgroundColor: palate.background.default,
          color: palate.neutral.light
        }}>
          <div>
            {name}
          </div>
          <div className='ml-auto small my-auto'>
            {useDateParser(start_datetime)}
          </div>
        </li>
      </Link>
    </div>
  )
}

export default ReturnLi