import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api/api';
import { useStateContext } from '../State/StateContext';
import { genderSchema, maritalSchema } from '../assets/schemas';
import { useAuthContext } from '../State/AuthContext';
import theme from '../theme';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const palate = theme()
    const navigate = useNavigate()
    const { setTitle } = useStateContext()
    const { setUser, user } = useAuthContext()
    const resUser = user?.resUser
    const date = new Date()
    const [errMsg, setErrMsg] = useState('')
    const [cred, setCred] = useState({
        ...resUser,
        date: `${resUser?.yob}-${resUser?.mob}-${resUser?.dob}`,
        password: ''
    });

    const handleCred = (e) => {
        const { name, value } = e?.target;
        setCred(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleNewReg = async (e) => {
        e.preventDefault()
        const mail = cred.email ? 'email' : ''
        const formatCred = {
            surname: cred?.surname,
            other_name: cred?.other_name,
            [mail]: cred?.email,
            state: cred?.state,
            lga_of_residence: cred?.lga_of_residence,
            town_of_residence: cred?.town,
            occupation: cred?.occupation,
            school: cred?.school,
            sch_fellowship: cred?.sch_fellowship,
            church: cred?.church,
            marital_status: cred?.marital_status,
            phone: cred?.phone,
        }
        try {
            await api.put(`/reg/update/${resUser?.id}`, formatCred);
            const response = await api.get(`/reg/view-attendee/${resUser.id}`)
            setUser(prev => ({ ...prev, resUser: response.data.data }))
            navigate('/explore/my-profile')
        } catch (err) {
            !err?.response ?
                toast.error(`${err}`, {
                    position: 'top-center',
                    className: 'text-center',
                    style: {
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light
                    }
                }) : toast.error(`Failed to Register}`, {
                    position: 'top-center',
                    className: 'text-center',
                    style: {
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light
                    }
                })
            console.error(`ERROR: ${err}`)
        }

    }

    useEffect(() => {
        setTitle('update profile')
        return () => {
            setTitle
        }
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [cred])


    return (
        <>
            <div className="container ">

                <div className="o-hidden border-0">
                    <div className="card-body ">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            {/* <div className="col-lg-5 d-none d-lg-block bg-register-image">
                <img src="/assets/media/Arc (2).jpg" />
              </div> */}
                            <div className="col-lg-7 form formCont regF animated--grow-in br-3 shadow-sm" style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="mb-4">Edit your profile</h1>
                                    </div>
                                    <form className="user" onSubmit={handleNewReg}>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}
                                                    className="form-control form-control-user"
                                                    id="exampleFirstName"
                                                    placeholder="First Name"
                                                    autoFocus
                                                    required
                                                    name='surname'
                                                    value={cred.surname}
                                                    onChange={handleCred} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}
                                                    className="form-control form-control-user"
                                                    required
                                                    placeholder="Last Name"
                                                    name='other_name'
                                                    value={cred.other_name}
                                                    onChange={handleCred} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text"
                                                style={{
                                                    backgroundColor: palate.background.default,
                                                    color: palate.neutral.light
                                                }}
                                                className="form-control form-control-user"
                                                placeholder="Email Address"
                                                name='email'
                                                value={cred.email}
                                                onChange={handleCred} />
                                        </div>
                                        <div className="form-group">
                                            <input type="number"
                                                style={{
                                                    backgroundColor: palate.background.default,
                                                    color: palate.neutral.light
                                                }}
                                                className="form-control form-control-user"
                                                required
                                                placeholder="Phone number"
                                                name='phone'
                                                value={cred.phone}
                                                onChange={handleCred} />
                                        </div>
                                        <div className='form-group row'>
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}

                                                    className="form-control form-control-user"
                                                    placeholder='State of Residence'
                                                    required
                                                    name='state'
                                                    value={cred.state}
                                                    onChange={handleCred} />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}

                                                    className="form-control form-control-user"
                                                    placeholder='Local govenment of residence'
                                                    required
                                                    name='lga_of_residence'
                                                    value={cred.lga_of_residence}
                                                    onChange={handleCred} />
                                            </div>
                                        </div>

                                            <div className='form-group row'>
                                                <div className="mb-3 mb-sm-0">
                                                    <input type="text"
                                                        style={{
                                                            backgroundColor: palate.background.default,
                                                            color: palate.neutral.light
                                                        }}

                                                        className="form-control form-control-user"
                                                        placeholder='Town of residence'
                                                        required
                                                        name='town_of_residence'
                                                        value={cred.town_of_residence}
                                                        onChange={handleCred} />
                                                </div>
                                            </div>
                                        <div className='form-group row'>
                                            <div className="mb-3 mb-sm-0">
                                                <input type="text"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}

                                                    className="form-control form-control-user"
                                                    placeholder='church'
                                                    required
                                                    name='church'
                                                    value={cred.church}
                                                    onChange={handleCred} />
                                            </div>
                                        </div>
                                        <div className='form-group row'>
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}

                                                    className="form-control form-control-user"
                                                    placeholder='Occupation'
                                                    required
                                                    name='occupation'
                                                    value={cred.occupation}
                                                    onChange={handleCred} />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}

                                                    className="form-control form-control-user"
                                                    placeholder='School'
                                                    required
                                                    name='school'
                                                    value={cred.school}
                                                    onChange={handleCred} />
                                            </div>
                                            <div className='form-group'>

                                            </div>
                                            <div className="mb-3 mb-sm-0">
                                                <input type="text"
                                                    style={{
                                                        backgroundColor: palate.background.default,
                                                        color: palate.neutral.light
                                                    }}

                                                    className="form-control form-control-user"
                                                    placeholder='School of fellowship'
                                                    required
                                                    name='sch_fellowship'
                                                    value={cred.sch_fellowship}
                                                    onChange={handleCred} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <select type="text"
                                                style={{
                                                    backgroundColor: palate.background.default,
                                                    color: palate.neutral.light
                                                }}
                                                className="form-control select"
                                                aria-describedby='Male or Female'
                                                placeholder='Gender'
                                                required
                                                name='marital_status'
                                                value={cred.marital_status}
                                                onChange={handleCred} >
                                                <option>Marital status</option>
                                                {maritalSchema.status.map(stats => (
                                                    <option value={stats}
                                                        key={stats}>
                                                        {stats}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <button className="btn btn-danger btn-user btn-block" >
                                            Update profile
                                        </button>
                                    </form>
                                    <br />
                                    <div className="text-center">
                                        <Link className="small" to="/explore/my-profile">
                                            Discard Session
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default EditProfile