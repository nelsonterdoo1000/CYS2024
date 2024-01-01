import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../State/StateContext'
import React, { useEffect, useState } from 'react'
import theme from '../theme'
import api from '../../api/api'

const RegOptions = () => {
    const { setTitle, programmes } = useStateContext()

    const navigate = useNavigate()
    const palate = theme()
    const { id } = useParams()
    const theProgram = programmes.find(program => program.id == id)

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

        try {
            api.post('/program/register', formatCred)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        setTitle('Register')
    }, [])


    return (
        <>
            <div className='p-3 p-sm-5'>
                <div className="o-hidden border-0 pl-md-3 pr-md-3 m-12 col-lg-6 col-xl-6 col-md-12 d-flex f-row m-auto regCard">
                    <div className="animated--grow-in mt-5 br-3" style={{
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light
                    }}>
                        <div className="shadow-sm p-md-2 br-3">
                            <div className="text-center pt-3">
                                <h1 className="h4 fs-5 fs-md-4 mb-2">Register Options for {theProgram?.name}</h1>
                            </div>
                            <form className="row p-3 d-flex" onSubmit={handleNewReg}>
                                <Link className="noDec col-sm-6 p-3" to={`/program_register-new/${theProgram?.id}`}>
                                    <div className="heighInherit my-auto text-center cardEl card br-3 p-5 d-flex">
                                        <span className="my-auto">New Registration (Obtain New CYS_CODE)</span>
                                    </div>
                                </Link>
                                <Link className="noDec col-sm-6 p-3" to={`/program_registerWithCode/${theProgram?.id}`}>
                                    <div className="heighInherit my-auto text-center cardEl card br-3 p-5 d-flex">
                                        <span className="my-auto"> Register With CYS_CODE</span>
                                    </div>
                                </Link>
                                <hr />
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegOptions