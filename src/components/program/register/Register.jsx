import React, { useState } from 'react'

import { useAuthContext } from '../../../State/AuthContext';
import { useStateContext } from '../../../State/StateContext';

import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import api from '../../../../api/api';
import theme from '../../../theme';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const palate = theme()
    const { programmes } = useStateContext()
    const { user } = useAuthContext()
    const userid = user?.resUser
    const { id } = useParams()
    const theProgram = programmes.find(program => program?.id == id)
    const [registerInf, setRegisterInf] = useState({
        programme_id: theProgram?.id
    })

    const setInf = (e) => {
        const { name, value } = e.target
        setRegisterInf(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const submit = (e) => {
        e.preventDefault()
        const formatCred = {
            user_cys_code: userid?.cys_code,
            programe_id: registerInf?.programme_id
        }

        try {
            toast(`Registering...`, {
                position: 'top-center',
                style: {
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }
            })

            api.post('/program/register', formatCred)

            toast.success(`Registration for ${theProgram?.name} is successful`, {
                position: 'top-center',
                style: {
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }
            })

            navigate(`/explore/program/${theProgram.id}`)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='pt-5 mt-3'>
            <div className="card o-hidden border-0 shadow-sm m-12 col-lg-5 col-xl-5 col-md-12 d-flex f-row m-auto regCard br-3" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <div className="card-body">
                    {/* <!-- Nested Row within Card Body --> */}

                    <div className="">
                        <div className="p-2 p-sm-3 animated--grow-in">
                            <div className="text-center">
                                <h1 className="h4 mb-2">Register self for {theProgram?.name}</h1>
                                <p className="m-auto text-align-center col-lg-10 col-md-8 col-sm-9">
                                    Enter your cys code and click register to continue,<br /> This helps us keep you up to date
                                </p>
                            </div>
                            <form className="user mt-4" onSubmit={submit}>
                                <div className='form-group pb-2'>
                                    <select type="text" className="form-control select"
                                        style={{
                                            backgroundColor: palate.background.default,
                                            color: palate.neutral.light
                                        }}
                                        aria-describedby='The proggramme you are to register for'
                                        placeholder='Gender'
                                        required
                                        name='programme_id'
                                        value={registerInf?.programme_id}
                                        onChange={setInf} >
                                        {programmes?.map(program => (
                                            <option value={program?.id}
                                                key={program?.id}>
                                                {program?.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button href="login.html" className="btn btn-danger btn-user btn-block">
                                    Register
                                </button>
                            </form>
                            <hr />
                            <div className="text-center">
                                <Link to={`/explore/program_registerother/${id}`}>
                                    <div className="small">Register others (Requires CYS_CODE)</div>
                                </Link>
                            </div>
                            <div className="text-center">
                                <Link to={`/program_register/${id}`}>
                                    <div className="small">Register New for (Get a CYS_CODE)</div>
                                </Link>
                            </div>
                            <div className="text-center">
                                <Link className="small" to={`/explore/program/${theProgram?.id}`}>
                                    Discard session
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register