import React, { useState, useEffect } from 'react'
import naijaStateLocalGovernment from 'naija-state-local-government';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import api from '../../api/api';
import { useStateContext } from '../State/StateContext';
import { ageRangesSchema, genderSchema, maritalSchema, monthShortSchema } from '../assets/schemas';
import { toast } from 'react-toastify';
import { useAuthContext } from '../State/AuthContext';
import theme from '../theme';

const Signup = () => {
  const nigeria = naijaStateLocalGovernment
  const palate = theme()
  const navigate = useNavigate()
  const { setTitle } = useStateContext();
  const { setUser } = useAuthContext();

  const [cred, setCred] = useState({
    surname: "",
    lastname: "",
    sex: "",
    phone: "",
    email: "",
    dob: "",
    mob: "",
    age_bracket: "",
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
      [mail]: cred.email,
      state: cred.state.toLocaleLowerCase(),
      lga_of_residence: cred.lga_of_residence.toLocaleLowerCase(),
      town_of_residence: cred.town.toLocaleLowerCase(),
      occupation: cred.occupation.toLocaleLowerCase(),
      school: cred.school.toLocaleLowerCase(),
      sch_fellowship: cred.sch_fellowship.toLocaleLowerCase(),
      denomination: cred.denomination.toLocaleLowerCase(),
      marital_status: cred.marital_status.toLocaleLowerCase(),
      phone: cred.phone,
      dob: cred.dob.toString().length < 2 ? `0${cred.dob.toString()}` : cred.dob.toString(),
      mob: cred.mob.toString().length < 2 ? `0${cred.mob.toString()}` : cred.mob.toString(),
      age_bracket: `${cred.age_bracket}`,
      sex: `${cred.sex}`
    }
    console.log(formatCred.mob)
    if (formatCred.sex) {
      if (formatCred.marital_status) {
        if (formatCred.age_bracket) {
          if (!formatCred.mob) {
            toast.error('Please select a month of birth', {
              position: 'top-center',
              style: {
                backgroundColor: palate.background.default,
                color: palate.neutral.light
              }
            })
            return
          }
          try {
            const res = await api.post('/reg/new-registration', formatCred);
            setUser(res.data.data)
            navigate('/newAddress')
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
          toast.warning(`Please select an age range`, {
            position: 'top-center',
            style: {
              backgroundColor: palate.background.default,
              color: palate.neutral.light
            }
          })
        }
      } else {
        toast.warning(`Invalid marital status`, {
          position: 'top-center',
          style: {
            backgroundColor: palate.background.default,
            color: palate.neutral.light
          }
        })
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
    setTitle('Register')
  }, [])

  return (
    <>
      <div className="container pt-5 mt-3">
        <div className='' style={{
          backgroundColor: palate.background.alt,
          color: palate.neutral.light
        }}>
        </div>
        <div className="o-hidden border-0   formPro">
          <div className="card-body ">
            {/* <!-- Nested Row within Card Body --> */}
            <div className="row">
              {/* <div className="col-lg-5 d-none d-lg-block bg-register-image">
                <img src="/assets/media/Arc (2).jpg" />
              </div> */}
              <div className="col-lg-7 form formCont regF animated--grow-in br-3  shadow-sm" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
              }}>
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 mb-4">Create an Account!</h1>
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
                          name='lga_of_residence'
                          value={cred.lga_of_residence}
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
                    <button className="btn btn-danger btn-user btn-block" >
                      Register Account
                    </button>
                  </form>
                  <br />
                  <div className="text-center">
                    <Link className="small" to="/reg/login">
                      Already have an account? Login!
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link className="small" to={`/`}>
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

export default Signup