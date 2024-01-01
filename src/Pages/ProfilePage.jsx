import React from 'react';

import { useStateContext } from '../State/StateContext';
import { useAuthContext } from '../State/AuthContext';

import { Link, useNavigate } from 'react-router-dom';
import { FaDoorOpen, FaUserEdit } from 'react-icons/fa';
import theme from '../theme';

const ProfilePage = () => {
  const navigate = useNavigate()
  const palate = theme()
  const { setSideNavSelected } = useStateContext()
  const { user,setUser } = useAuthContext()

  React.useEffect(() => {
    setSideNavSelected('prof')
  }, [])

  const resUser = user?.resUser

  return <section className='mdl-grid' id=''>
    <div className="container-fluid" >
      <div className="row">

        {/* first block */}
        <div className="col-lg-4 ">
          <div className="card mb-4 animated--grow-in p-0 br-3 shadow-sm" style={{
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
                <Link to={`/reg/updateProfile`}>
                  <button type="button"
                    className="btn btn-danger bg-gradient-danger ">
                    <FaUserEdit className='icon fs-6 mr-1' />
                    <div className="vanishOnSmall">Edit profile</div>
                  </button>
                </Link>
                <button type="button" className="btn btn-outline-danger ms-1" onClick={() => {
                  localStorage.removeItem(`uid`)
                  setUser({})
                  navigate('/')
                }}>
                  <FaDoorOpen className='icon fs-6 mr-1' />
                  <div className="vanishOnSmall">Logout</div>
                </button>
              </div>
            </div>
          </div>

          {/* second block */}
          <div className="mb-4 mb-lg-0 animated--grow-in br-3 shadow-sm" style={{
            backgroundColor: palate.background.default,
            color: palate.neutral.light
          }}>
            <div className="card-body p-0 br-3">
              <ul className="list-group list-group-flush">
                <li className="d-flex align-items-center p-3">
                  <p className="mb-0">Full name: {resUser?.surname} {resUser?.other_name}</p>
                </li>
                <li className="d-flex align-items-center p-3">
                  <p className="mb-0">Email: {resUser?.email}</p>
                </li>
                <li className="d-flex align-items-center p-3">
                  <p className="mb-0">Phone: {resUser?.phone}</p>
                </li>
                <li className="d-flex align-items-center p-3">
                  <p className="mb-0">Address: {resUser?.town_of_residence} {resUser?.lga_of_residence}, {resUser?.state} state</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* last block */}
        <div className="col-lg-8">
          <div className="mb-4 animated--grow-in br-3 shadow-sm" style={{
            backgroundColor: palate.background.default,
            color: palate.neutral.light
          }}>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Occupation</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{resUser?.occupation}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">School</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{resUser?.school}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">School of fellowship</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{resUser?.sch_fellowship}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">church</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{resUser?.church}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 mb-md-0 animated--grow-in">
                <div className="card-body">
                  <p className="mb-4"><span className="text-danger font-italic me-1">assigment</span> Project Status
                  </p>
                  <p className="mb-1" >Web Design</p>
                  <div className="progress ">
        7           <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" >Website Markup</p>
                  <div className="progress ">
        7           <div className="progress-bar" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" >One Page</p>
                  <div className="progress ">
        7           <div className="progress-bar" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" >Mobile Template</p>
                  <div className="progress ">
        7           <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" >Backend API</p>
                  <div className="progress  mb-2">
  7                <div className="progress-bar" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 mb-md-0 animated--grow-in">
                <div className="card-body">
                  <p className="mb-4"><span className="text-danger font-italic me-1">assigment</span> Project Status
                  </p>
                  <p className="mb-1" >Web Design</p>
                  <div className="progress ">
        7           <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" >Website Markup</p>
                  <div className="progress ">
        7           <div className="progress-bar" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" >One Page</p>
                  <div className="progress ">
        7           <div className="progress-bar" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" >Mobile Template</p>
                  <div className="progress ">
        7           <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <p className="mt-4 mb-1" >Backend API</p>
                  <div className="progress  mb-2">
  7                <div className="progress-bar" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
}

export default ProfilePage