import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../../api/api';
import { useStateContext } from '../State/StateContext'
import theme from '../theme';
import { toast } from 'react-toastify';

const RegWithCode = () => {
    const { setTitle, programmes } = useStateContext();
    const navigate = useNavigate()
    const palate = theme()
    const { id } = useParams()
    const theProgram = programmes.find(program => program.id == id)
    const [isAdding, setIsAdding] = useState(false)

    const [cred, setCred] = useState({
        cys_code: "",
        programme_id: theProgram?.id,
    });

    const handleCred = (e) => {
        const { name, value } = e.target;
        setCred(prev => ({
            ...prev,
            [name]: value
        }))
        if (value == "Gender" || value == 'Marital status')
            setCred(prev => ({
                ...prev,
                [name]: ''
            }))
    }

    const handleNewReg = async (e) => {
        e.preventDefault()
        const formatCred = {
            user_cys_code: cred.cys_code,
            programe_id: cred.programme_id,
        }
        toast(`Registering...`, {
            position: 'top-center',
            style: {
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }
        })
        try {
            const res = await api.post('/program/registration', formatCred);
            () => {
                if (!res) {
                    return
                }
            }
            !isAdding ?
                navigate('/')
                : () => {
                    setCred(prev => ({ ...prev, cys_code: '' }))
                }
            toast.success(`Registration for ${theProgram?.name} is successful`, {
                position: 'top-center',
                style: {
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }
            })
        } catch (err) {
            console.error(err)
            toast.error(`ERROR: ${err}`, {
                position: 'top-center',
                style: {
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }
            })
        }
    }

    useEffect(() => {
        setTitle('Register WithCode')
    }, [])


    return (
        <>
            <div className='p-5'>
                <div className="card o-hidden border-0 shadow-none m-12 col-lg-6 col-xl-6 col-md-12 d-flex f-row m-auto regCard">
                    <div className=" form animated--grow-in mt-5 br-3" style={{
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light
                    }}>
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 mb-4">Register for {theProgram?.name}</h1>
                            </div>
                            <form className="user" onSubmit={handleNewReg}>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user"
                                            style={{
                                                backgroundColor: palate.background.default,
                                                color: palate.neutral.light
                                            }}
                                            aria-describedby="Your CYS Code"
                                            placeholder="CYS-CODE"
                                            autoFocus
                                            required
                                            name='cys_code'
                                            value={cred?.cys_code}
                                            onChange={handleCred} />
                                    </div>
                                </div>
                                <button className="btn btn-danger btn-user btn-block mt-1"
                                    onClick={() => setIsAdding(false)}>
                                    Register
                                </button>
                                <button className="btn btn-danger btn-user btn-block mt-1"
                                    onClick={() => setIsAdding(true)}>
                                    Register and add another
                                </button>
                            </form>
                            <br />
                            <div className="text-center">
                                <Link className="small" onClick={() => navigate(-1)}>
                                    Discard session
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegWithCode