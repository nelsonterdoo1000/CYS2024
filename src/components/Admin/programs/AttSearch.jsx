import React, { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

const AttSearch = (props) => {
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
        const resParams = params.surname || params.school || params.state || params.id || params.sex || params.town_of_residence || params.occupation || params.marital_status
        const found = props.attendees.map(inf => {
            const id = inf?.id || 0
            return inf.surname.toLowerCase().indexOf(params.surname.toLowerCase()) > -1 &&
                inf.school.toLowerCase().indexOf(params.school.toLowerCase()) > -1 &&
                inf.state.toLowerCase().indexOf(params.state.toLowerCase()) > -1 &&
                id.toString().indexOf(params.id) > -1 &&
                inf.sex.toLowerCase().indexOf(params.sex.toLowerCase()) > -1 &&
                inf.town_of_residence.toLowerCase().indexOf(params.town_of_residence.toLowerCase()) > -1 &&
                inf.lga_of_residence.toLowerCase().indexOf(params.lga_of_residence.toLowerCase()) > -1 &&
                inf.occupation.toLowerCase().indexOf(params.occupation.toLowerCase()) > -1 &&
                inf.marital_status.toLowerCase().indexOf(params.marital_status.toLowerCase()) > -1 && inf
        })

        const processFiltered = found.filter(item => item && item) || []

        try {
            props.setAttendees(processFiltered)
            props.setHeader(`Search for: ${resParams} ____ Results:  ${processFiltered.length}`)
            props.setBodyTxt(`No matches for your search`)

            props.setIsSearching(false)
        } catch (err) {
            console.error(`ERROR: ${err}`)
        }
    }

    return (
        <div className={` ${props?.class}`}>
            <div className={`d-none ${props?.className} animated-grow-in`} id='search'>
                <div id="top"></div>
                <div className="d-flex">
                    <h3 className="sidenav-title">Search</h3>
                    {props?.recentClassName &&
                        <div className="noOutline ml-auto text-gray-700 p-0 mb-auto t-3 ">
                            <div className='card' onClick={() => props?.setIsSearching(false)}>
                                <FaTimes />
                            </div>
                        </div>
                    }
                </div>
                <div className="sidenav-item  noOutline br-3" >
                    <form onSubmit={e => handleSubmit(e)} className='form user'>
                        <div className='form-group row'>
                            <div className="col-6 ">
                                <input type="text"
                                    className='input form-control'
                                    placeholder='Surname'
                                    name='surname'
                                    value={params?.surname}
                                    onChange={handleForm}
                                    autoFocus />
                            </div>
                            <div className="col-6 ">
                                <input type="text"
                                    className='input form-control'
                                    placeholder='School'
                                    name='school'
                                    value={params?.school}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-12 ">
                                <input type="text"
                                    className='input form-control'
                                    placeholder='State'
                                    name='state'
                                    value={params?.state}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-6 ">
                                <input type="text"
                                    className='input form-control'
                                    placeholder='ID'
                                    name='id'
                                    value={params?.id}
                                    onChange={handleForm} />
                            </div>
                            <div className="col-6 ">
                                <input type="text"
                                    className='input form-control'
                                    placeholder='Gender'
                                    name='sex'
                                    value={params?.sex}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-12 ">
                                <input type="text"
                                    className='input form-control'
                                    placeholder='Town of residence'
                                    name='town_of_residence'
                                    value={params?.town_of_residence}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-6 ">
                                <input type="text"
                                    className='input form-control'
                                    placeholder='LGA of residence'
                                    name='lga_of_residence'
                                    value={params?.lga_of_residence}
                                    onChange={handleForm} />
                            </div>
                            <div className="col-6 ">
                                <input type="text"
                                    className='input form-control'
                                    placeholder='Occupation'
                                    name='occupation'
                                    value={params?.occupation}
                                    onChange={handleForm} />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <div className="col-12 ">
                                <input type="text"
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

export default AttSearch