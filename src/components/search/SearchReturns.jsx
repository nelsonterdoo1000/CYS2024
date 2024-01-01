import React from 'react'
import ReturnLi from './ReturnLi'
import theme from '../../theme'

const SearchReturns = ({ filtered }) => {
    const palate = theme()
    const result = filtered

    return (
        <div className='my-3 animated--grow-in '>
            <div className=''>
                {
                    !result?.length ?
                        <div>

                        </div> :
                        <div className='returns animated--grow-in slideInUp br-3' style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>
                            {
                                result.map((prog, i) => (
                                    <ReturnLi key={i}
                                        prog={prog} />
                                ))
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default SearchReturns