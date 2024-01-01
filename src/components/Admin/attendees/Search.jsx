import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import api from '../../../../api/api'
import theme from '../../../theme'
import { toast } from 'react-toastify'

const Search = (props) => {
    const palate = theme()

    const [params, setParams] = useState({
        surname: '',
        school: '',
        state: '',
        id: '',
        sex: '',
        town_of_residence: '',
        lga_of_residence: '',
        occupation: '',
        marital_status: ''
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
        toast(`Fetching...`, {
            style: {
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            },
            position: 'top-center'
        })
        const resParams = params.surname || params.school || params.state || params.id || params.sex || params.town_of_residence || params.occupation || params.marital_status
        const resParam = params.surname ? 'surname' : '' || params.school ? 'school' : '' || params.state ? 'state' : '' || params.id ? 'id' : '' || params.sex ? 'sex' : '' || params.town_of_residence ? 'town_of_residence' : '' || params.occupation ? 'occupation' : '' || params.marital_status ? 'marital_status' : ''
        api.get(`/reg/attendance?${resParam}=${resParams}`)
            .then(res => {
                props?.setAttendees(res.data)
                props?.setIsSearching(false)
                resParams && props?.setHeader(`Search for: ${resParams} ____ Results: ${res.data.length}`)
                !res.data.length && props?.setBodyTxt(`No matches for your search`)
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
    }

    return (
        <div className={`${props?.class}`}>
            <div className={`d-none ${props?.className} animated-grow-in`} id='search' style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <div id="top"></div>
                <div className="d-flex">
                    <h3 className="">Search</h3>
                    {props?.recentClassName &&
                        <div className="noOutline ml-auto p-0 mb-auto t-3 br-3" >
                            <div className='card' style={{
                                border: `1px solid rgba(100,100,100,0.3)`
                            }}
                                onClick={() => props?.setIsSearching(false)}>
                                <FaTimes />
                            </div>
                        </div>
                    }
                </div>
                <div className="sidenav-item  noOutline br-3" >
                    <form onSubmit={e => handleSubmit(e)} className='form user'>
                        <div className='form-group row'>
                            <div className="col-6 ">
                                <input type="text" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}
                                    className='input form-control'
                                    placeholder='Surname'
                                    name='surname'
                                    value={params?.surname}
                                    onChange={handleForm}
                                    autoFocus />
                            </div>
                            <div className="col-6 ">
                                <input type="text" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}
                                    className='input form-control'
                                    placeholder='School'
                                    name='school'
                                    value={params?.school}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-12 ">
                                <input type="text" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}
                                    className='input form-control'
                                    placeholder='State'
                                    name='state'
                                    value={params?.state}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-6 ">
                                <input type="text" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}
                                    className='input form-control'
                                    placeholder='ID'
                                    name='id'
                                    value={params?.id}
                                    onChange={handleForm} />
                            </div>
                            <div className="col-6 ">
                                <input type="text" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}
                                    className='input form-control'
                                    placeholder='Gender'
                                    name='sex'
                                    value={params?.sex}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-12 ">
                                <input type="text" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}
                                    className='input form-control'
                                    placeholder='Town of residence'
                                    name='town_of_residence'
                                    value={params?.town_of_residence}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-6 ">
                                <input type="text" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}
                                    className='input form-control'
                                    placeholder='LGA of residence'
                                    name='lga_of_residence'
                                    value={params?.lga_of_residence}
                                    onChange={handleForm} />
                            </div>
                            <div className="col-6 ">
                                <input type="text" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}
                                    className='input form-control'
                                    placeholder='Occupation'
                                    name='occupation'
                                    value={params?.occupation}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-12 ">
                                <input type="text" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}
                                    className='input form-control'
                                    placeholder='Marital status'
                                    name='marital_status'
                                    value={params?.marital_status}
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