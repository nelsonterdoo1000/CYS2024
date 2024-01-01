import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../State/StateContext'
import naijaStateLocalGovernment from 'naija-state-local-government';
import React, { useEffect, useState } from 'react'
import theme from '../theme'
import { ageRangesSchema, genderSchema, maritalSchema, monthShortSchema } from '../assets/schemas';
import api from '../../api/api'
import { toast } from 'react-toastify';
import { useAuthContext } from '../State/AuthContext';

const RegNew = () => {
    const { setTitle, programmes } = useStateContext()
      const nigeria = naijaStateLocalGovernment
    const { setUser } = useAuthContext()
    const date = new Date()
    const navigate = useNavigate()
    const palate = theme()
    const { id } = useParams()
    const theProgram = programmes.find(program => program.id == id)

    const [isAdding, setIsAdding] = useState(false)

    const [cred, setCred] = useState({
        programme_id: theProgram?.id,
        surname: "",
        lastname: "",
        sex: "",
        phone: "",
        email: null,
        date: "",
        state: "",
        lga_of_residence: "",
        town: "",
        occupation: "",
        school: "",
        sch_fellowship: "",
        church: "",
        marital_status: ""
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
        const mail = cred.email ? 'email' : ''
        const formatCred = {
            surname: cred.surname,
            other_name: cred.lastname,
            [mail]: cred.email || '',
            state: cred.state.toLocaleLowerCase(),
            lga_of_residence: cred.lga_of_residence.toLocaleLowerCase(),
            town_of_residence: cred.town.toLocaleLowerCase(),
            occupation: cred.occupation.toLocaleLowerCase(),
            school: cred.school.toLocaleLowerCase(),
            sch_fellowship: cred.sch_fellowship.toLocaleLowerCase(),
            church: cred.church.toLocaleLowerCase(),
            marital_status: cred.marital_status.toLocaleLowerCase(),
            phone: cred.phone,
            dob: `${cred.date.slice(8)}`,
            mob: `${cred.date.slice(5, 7)}`,
            yob: `${cred.date.slice(0, 4)}`,
            sex: `${cred.sex}`,
            programme: cred.programme_id
        }
        toast(`Registering...`, {
            position: 'top-center',
            style: {
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }
        })
        if (formatCred.sex) {
            try {
                const res = await api.post('/reg/new-registration', formatCred);
                setUser(prev => ({ ...prev, someAlt: res.data.data.cys_code, altName: res.data.data.surname }))
                toast.success(
                    <div className='card p-3 br-3 shadow-sm justify-content-center d-flex'>
                        Hello {cred.surname}, you are welcome to Christian Youth Summit
                    </div>, {
                    position: 'top-center',
                    style: {
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light
                    }
                }
                )
                isAdding ?
                    setCred(prev => ({
                        ...prev,
                        surname: "",
                        lastname: "",
                        sex: "",
                        phone: "",
                        email: "",
                        date: "",
                        state: "",
                        lga_of_residence: "",
                        town: "",
                        occupation: "",
                        school: "",
                        sch_fellowship: "",
                        church: "",
                        marital_status: "",
                        password: "",
                        passTry: ""
                    }))
                    : navigate('/newAddress')
            } catch (err) {
                !err?.response ?
                    toast.error('No server response', {
                        position: 'top-center',
                        style: {
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }
                    }) : toast.error('Failed to register', {
                        position: 'top-center',
                        style: {
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }
                    })
                console.error(`ERROR: ${err}`)
            }
        } else {
            toast.warning(`Invalid Gender`, {
                position: 'top-center',
                style: {
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }
            })
        }
    }

    useEffect(() => {
        setTitle('Register New')
    }, [])


    return (
        <>
            <div className='p-5'>
                <div className="card shadow-none  border-0 pl-md-3 pr-md-3 m-12 col-lg-6 col-xl-6 col-md-12 d-flex f-row m-auto regCard">
                    <div className="form animated--grow-in br-3" style={{
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light
                    }}>
                        <div className="p-5 shadow-sm">
                            <div className="text-center">
                                <h1 className="h4 mb-4">Register for {theProgram?.name}</h1>
                            </div>
                            <form className="user" onSubmit={(e) => {
                                handleNewReg(e)
                            }}>
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
                                            name='lastname'
                                            value={cred.lastname}
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
                                        placeholder="Phone number"
                                        name='phone'
                                        value={cred.phone}
                                        onChange={handleCred} />
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
                                        name='sex'
                                        value={cred.sex}
                                        onChange={handleCred} >
                                        <option value={''}>Gender</option>
                                        {genderSchema.genders.map(gender => (
                                            <option value={gender}
                                                key={gender}>
                                                {gender}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="mb-3 mb-sm-0">
                                        <input type="text"
                                            style={{
                                                backgroundColor: palate.background.default,
                                                color: palate.neutral.light
                                            }}

                                            className="form-control form-control-user"
                                            placeholder='church'
                                            name='church'
                                            value={cred.church}
                                            onChange={handleCred} />
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="number"
                                            style={{
                                                backgroundColor: palate.background.default,
                                                color: palate.neutral.light
                                            }}
                                            className="form-control form-control-user select"
                                            placeholder='Day of birth'
                                            required
                                            name='dob'
                                            value={cred.dob}
                                            onChange={handleCred} />
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <select
                                            style={{
                                                backgroundColor: palate.background.default,
                                                color: palate.neutral.main
                                            }}
                                            className="form-control select"
                                            aria-describedby='age bracket'
                                            placeholder='age'
                                            required
                                            name='mob'
                                            value={cred.mob}
                                            onChange={handleCred} >
                                            <option value={''}>Month of Birth</option>
                                            {monthShortSchema.months.map((month, i) => (
                                                <option value={i + 1}
                                                    key={month}>
                                                    {month}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <select type="text"
                                        style={{
                                            backgroundColor: palate.background.default,
                                            color: palate.neutral.main
                                        }}
                                        className="form-control select"
                                        aria-describedby='age bracket'
                                        placeholder='age'
                                        required
                                        name='age_bracket'
                                        value={cred.age_bracket}
                                        onChange={handleCred} >
                                        <option value={''}>Age bracket</option>
                                        {ageRangesSchema.years.map(range => (
                                            <option value={range}
                                                key={range}>
                                                {range}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='form-group row'>
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <select type="text"
                                            style={{
                                                backgroundColor: palate.background.default,
                                                color: palate.neutral.light
                                            }}
                                            className="form-control select"
                                            aria-describedby='States in Nigeria'
                                            placeholder='State of residence'
                                            required
                                            name='state'
                                            value={cred.state}
                                            onChange={handleCred} >
                                            <option value={''}>State of Residence</option>
                                            {nigeria.all().map(state => (
                                                <option value={state.state}
                                                    key={state.state}>
                                                    {state.state}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <select type="text"
                                            style={{
                                                backgroundColor: palate.background.default,
                                                color: palate.neutral.light
                                            }}
                                            className="form-control select"
                                            aria-describedby='Lgas in Nigeria'
                                            required
                                            name='lga_of_rescidence'
                                            value={cred.lga_of_rescidence}
                                            onChange={handleCred} >
                                            <option value={''}>LGA of Residence</option>
                                            {cred?.state ?
                                                nigeria.lgas(cred?.state).lgas.map(lga => (
                                                    <option value={lga}
                                                        key={lga}>
                                                        {lga}
                                                    </option>
                                                ))
                                                : ''}
                                        </select>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className="mb-3 mb-sm-0">
                                    <input type="text"
                                            style={{
                                                backgroundColor: palate.background.default,
                                                color: palate.neutral.light
                                            }}
                                            className="form-control form-control-user"
                                            placeholder='Town of Residence'
                                            name='town_of_residence'
                                            value={cred.town_of_residence}
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
                                        <option value={''}>Marital status</option>
                                        {maritalSchema.status.map(stats => (
                                            <option value={stats}
                                                key={stats}>
                                                {stats}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button className="btn btn-danger btn-user btn-block"
                                    onClick={() => setIsAdding(false)} >
                                    Register
                                </button>
                                <button value="Register and add Another"
                                    className="btn btn-danger btn-user btn-block mt-1"
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

export default RegNew