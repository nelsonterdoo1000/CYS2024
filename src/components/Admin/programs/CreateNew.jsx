import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../../../../api/api'
import theme from '../../../theme'
import { toast } from 'react-toastify'
import { useStateContext } from '../../../State/StateContext'

const CreateNew = () => {
    const { setProgrammes } = useStateContext()
    const navigate = useNavigate()
    const palate = theme()
    const [newProgram, setNewProgram] = useState({
        "flyer": null,
        "description": "",
        "name": "",
        "start_datetime": "",
        "end_datetime": "",
        "theme": ""
    })

    const handleNew = ({ target }) => {
        const { name, value } = target;
        setNewProgram(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFile = ({ target }) => {
        const { name, files } = target;
        setNewProgram(prev => ({
            ...prev,
            [name]: files
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newProgram.flyer) {
            toast.warn(`Please select a file`, {
                position: `top-center`,
                style: {
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }
            })
            return;
        }

        console.log(newProgram.flyer[0])
        const fd = new FormData()
        fd.append('flyer', newProgram.flyer[0])
        fd.append('description', newProgram.description)
        fd.append('name', newProgram.name)
        fd.append('start_datetime', newProgram.start_datetime)
        fd.append('end_datetime', newProgram.end_datetime)
        fd.append('theme', newProgram.theme)

        api.post(`/program/create`, fd)
            .then(res => {
                console.log(res.data)
                setProgrammes(prev => [res.data, ...prev])
                navigate(`/admimin/programmes`)
            }).catch(err => toast.error(`ERROR: ${err}`, {
                position: `top-center`,
                style: {
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }
            }))
    }

    return (
        <div className="container-fluid">
            <div className='backDropLittleLessPro' style={{
                backgroundColor: palate.background.alt,
                color: palate.neutral.light
            }}>
                <div className="o-hidden border-0 formPro">
                    <div className="card-body">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className={`row ${newProgram.flyer && ' shadow-sm br-3'} col-sm-10 col-md-8 col-lg-8 ml-auto mr-auto p-0 `} style={{
                            backgroundColor: newProgram.flyer && palate.background.default,
                            color: palate.neutral.light
                        }}>
                            {/* {newProgram.flyer &&
                                <div className="col-lg-5 d-none d-lg-block d-flex my-auto" >
                                    <img src={newProgram.flyer} alt='' className={`img-fluid z-2 animated--grow-in ${!newProgram.flyer && 'ml-auto mr-auto shadow-sm'}`} />
                                </div>} */}
                            <div className={`col-lg-7 form regF animated--grow-in ml-auto mr-auto`}>
                                <div className={`p-5 ${!newProgram.flyer && 'shadow-sm'} br-3`} style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}>
                                    <div className="text-center">
                                        <h1 className="h4 mb-4" style={{
                                            color: palate.neutral.mediumMain
                                        }}>Create New Programme!</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input type="text"
                                                style={{
                                                    backgroundColor: palate.background.default,
                                                    color: palate.neutral.light
                                                }}
                                                className="form-control form-control-user"
                                                required
                                                placeholder="Name"
                                                name='name'
                                                value={newProgram.name}
                                                onChange={handleNew} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text"
                                                style={{
                                                    backgroundColor: palate.background.default,
                                                    color: palate.neutral.light
                                                }}
                                                className="form-control form-control-user"
                                                required
                                                placeholder="Theme"
                                                name='theme'
                                                value={newProgram.theme}
                                                onChange={handleNew} />
                                        </div>
                                        <div className='form-group row'>
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <div className={`help-block pl-1 small text-gray-600`}>Start date</div>
                                                <input type="date"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}
                                                    className="form-control form-control-user"
                                                    placeholder='Start date'
                                                    required
                                                    name='start_datetime'
                                                    value={newProgram.start_datetime}
                                                    onChange={handleNew} />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <div className={`help-block pl-1 small text-gray-600`}>End date</div>
                                                <input type="date"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}
                                                    className="form-control form-control-user"
                                                    placeholder='End date'
                                                    required
                                                    name='end_datetime'
                                                    value={newProgram.end_datetime}
                                                    onChange={handleNew} />
                                            </div>
                                            <div className='form-group'>

                                            </div>
                                            <div className="col-sm-12 mb-3 mb-sm-0">
                                                <input type="file"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}
                                                    className="form-control form-control-user"
                                                    placeholder='Flyer'
                                                    required
                                                    name='flyer'
                                                    onChange={handleFile} />
                                            </div>
                                        </div>
                                        <div className='form-group row'>
                                            <div className="col-sm-12 mb-3 mb-sm-0">
                                                <textarea className="form-control"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}
                                                    placeholder='Description'
                                                    required
                                                    name='description'
                                                    value={newProgram.description}
                                                    onChange={handleNew} />
                                            </div>
                                        </div>

                                        <button className="btn btn-danger btn-user btn-block" >
                                            Create
                                        </button>
                                    </form>
                                    <br />
                                    <div className="text-center" onClick={() => navigate(-1)}>
                                        <Link className="small">
                                            Discard Session
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateNew