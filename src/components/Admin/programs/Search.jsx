import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import api from '../../../../api/api'
import { useAuthContext } from '../../../State/AuthContext'
import theme from '../../../theme'

const Search = (props) => {
    const { programmes } = useAuthContext()
    const palate = theme()

    const [params, setParams] = useState({
        name: '',
        theme: ''
    })

    const handleForm = ({ target }) => {
        const { name, value } = target;
        setParams(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = params.name;
        const theme = params.theme
        const setPrograms = props.setPrograms
        try {
            const found = programmes?.filter(programme => (programme.name.toLowerCase().indexOf(name.toLowerCase()) > -1))

            const foundPro = found?.filter(programme => (programme.theme.toLowerCase().indexOf(theme.toLowerCase()) > -1))
console.log(found)
            setPrograms(foundPro)
            const length = foundPro.length
            props?.setHeader(() => {
                return name || theme ?
                    `Search for: ${name || theme} ___ Results: ${length}`
                    : `All programmes: ${length}`
            })
            props?.setIsSearching && props?.setIsSearching(false)
            !length && props?.setBodyTxT(
                <td className='p-0 border-0'>No matches for your search</td>
            )
        } catch (err) {
            console.error(`ERROR: ${err}`)
        }
    }

    return (
        <div className={` ${props?.class}`}>
            <div className={`d-none ${props?.className} animated-grow-in`} id='search' style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <div id="top"></div>
                <div className="d-flex">
                    <h3>Search</h3>
                    {props?.recentClassName &&
                        <div className="noOutline ml-auto  p-0 mb-auto t-3 ">
                            <div className='card' style={{
                                border: `1px solid rgba(100,100,100,0.3)`
                            }}
                                onClick={() => props?.setIsSearching(false)}>
                                <FaTimes />
                            </div>
                        </div>
                    }
                </div>
                <div className="sidenav-item noOutline br-3" >
                    <form onSubmit={e => handleSubmit(e)} className='form user'>
                        <div className='form-group row'>
                            <div className="col-6 ">
                                <input type="search"
                                    style={{
                                        backgroundColor: palate.background.default,
                                        color: palate.neutral.light
                                    }}
                                    className='input form-control'
                                    placeholder='Name'
                                    name='name'
                                    autoComplete='true'
                                    value={params?.name}
                                    onChange={handleForm}
                                    autoFocus />
                            </div>
                            <div className="col-6 ">
                                <input type="search"
                                    style={{
                                        backgroundColor: palate.background.default,
                                        color: palate.neutral.light
                                    }}
                                    className='input form-control'
                                    placeholder='Theme'
                                    name='theme'
                                    autoComplete='true'
                                    value={params?.theme}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        {/* submit button */}
                        <div className="help-block text-gray-500 absolute-top">Search parametes are optional</div>
                        <button type="submit"
                            className='btn btn-danger'>
                            <FaSearch className='icon' /> Search
                        </button>
                    </form>
                </div>
            </div>
            {/* <!-- End sidenav --> */}
        </div>
    )
}

export default Search