import { useAuthContext } from '../../../State/AuthContext'
import React from 'react'
import { FaRegPlusSquare, FaTrash, FaUserEdit } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import theme from '../../../theme'
import api from '../../../../api/api'
import { toast } from 'react-toastify'

const AttendeeView = () => {
    const { id } = useParams()
    const palate = theme()
    const { attendees } = useAuthContext()
    const resUser = attendees.find(user => user.id == id)

    return (
        <section className='mdl-grid' id=''>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="card mb-4 animated--grow-in p-0 br-3"
                            style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                            <div className="card-body text-center ">
                                <div className="">
                                    <div className='circleThing'>
                                    </div>
                                    {/* <img src="assets/Arc (2).jpg" alt="avatar" className="p-0 img-fluid animated--grow-in" /> */}
                                </div>
                                <h5 className="my-3">{resUser?.surname} {resUser?.other_name}</h5>
                                <p className="text-muted mb-1">{resUser?.occupation}</p>
                                <p className="text-muted mb-4">{resUser?.cys_code} </p>
                                <div className="d-flex justify-content-center mb-2">
                                    <Link to={`/Admin/attendees/attendee_update/${id}`}>
                                        <button type="button"
                                            className="btn btn-danger bg-gradient-danger  d-flex">
                                            <FaUserEdit className='fs-6 mr-1 my-auto' />
                                            <span className="d-none d-sm-block">
                                                Edit Attendee
                                            </span>
                                        </button>
                                    </Link>
                                    <button type="button" className="btn btn-outline-danger ms-1 d-flex"
                                        onClick={() => {
                                            try {
                                                toast('Processing request', { position: 'top-center' })
                                                api.post('/reg/create-registrar', { cys_code: resUser?.cys_code })
                                                toast.success(`Success ${resUser?.surname} is now a registrar`, { position: 'top-center' })
                                            } catch (err) {
                                                console.log(err);
                                                toast.error(`ERROR: ${err}`)
                                            }
                                        }}>
                                        <FaRegPlusSquare className='fs-6 mr-1 my-auto' />
                                        <span className="d-none d-sm-block">
                                            Make Registrar
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card p-0 mb-4 mb-lg-0 animated--grow-in">
                            <div className=" animated--grow-in" >
                                <div className="card-ody p-0">
                                    <ul className="list-group list-group-flush br-3" style={{
                                        backgroundColor: palate.background.default,
                                    }}>
                                        <li className="d-block align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning"></i>
                                            <p className="mb-0">Occupation: {resUser?.occupation}</p>
                                        </li>
                                        <li className="d-block align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning"></i>
                                            <p className="mb-0">School: {resUser?.school}</p>
                                        </li>
                                        <li className="d-block align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning"></i>
                                            <p className="mb-0">School of fellowship: {resUser?.sch_fellowship}</p>
                                        </li>
                                        <li className="d-block align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning"></i>
                                            <p className="mb-0">Church: {resUser?.church}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card br-3 animated--grow-in p-0" style={{
                            backgroundColor: palate.background.default,
                        }}>
                            <ul className="list-group list-group-flush -3">
                                <li className="d-block align-items-center p-3">
                                    <i className="fas fa-globe fa-lg text-warning"></i>
                                    <p className="mb-0">Full name: {resUser?.surname} {resUser?.other_name}</p>
                                </li>
                                <li className="d-block align-items-center p-3">
                                    <i className="fab fa-github fa-lg" ></i>
                                    <p className="mb-0">Email: {resUser?.email}</p>
                                </li>
                                <li className="d-block align-items-center p-3">
                                    <i className="fab fa-twitter fa-lg" ></i>
                                    <p className="mb-0">Phone: {resUser?.phone}</p>
                                </li>

                                <li className="d-block align-items-center p-3">
                                    <i className="fab fa-instagram fa-lg" ></i>
                                    <p className="mb-0">Address: {resUser?.town_of_residence} {resUser?.lga_of_residence}, {resUser?.state} state</p>
                                </li>
                                <li className="d-block align-items-center p-3">
                                    <i className="fab fa-instagram fa-lg" ></i>
                                    <p className="mb-0">Gender: {resUser?.sex} </p>
                                </li>
                                <li className="d-block align-items-center p-3">
                                    <i className="fab fa-instagram fa-lg" ></i>
                                    <p className="mb-0">Date of birth: {resUser?.dob} {resUser?.mob}, {resUser?.yob} </p>
                                </li>
                                <li className="d-block align-items-center p-3">
                                    <i className="fab fa-instagram fa-lg" ></i>
                                    <p className="mb-0">Marital status: {resUser?.marital_status}</p>
                                </li>
                                <li className="d-block align-items-center p-3">
                                    <i className="fab fa-instagram fa-lg" ></i>
                                    <p className="mb-0">Created at: {resUser?.created_at} </p>
                                </li>
                                <li className="d-block align-items-center p-3">
                                    <i className="fab fa-instagram fa-lg" ></i>
                                    <p className="mb-0">Updated at: {resUser?.updated_at} </p>
                                </li>
                                <li className="d-block align-items-center p-3">
                                    <i className="fab fa-instagram fa-lg" ></i>
                                    <p className="mb-0">Attendee user: {resUser?.attendee_user} </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AttendeeView