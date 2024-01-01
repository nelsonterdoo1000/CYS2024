import { useState, useEffect } from "react";

import api from "../../api/api";

import { useStateContext } from "../State/StateContext";
import { useAuthContext } from "../State/AuthContext";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import theme from "../theme";
import { toast } from "react-toastify";

const Login = () => {
  const { setTitle } = useStateContext()
  const { setUser, user } = useAuthContext()
  const palate = theme()

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: user?.cys_code || '',
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const FormatedCred = {
      username: credentials.username.toLocaleLowerCase(),
      password: credentials.password
    }
    try {
      const resp = api.post('/reg/login', FormatedCred);

      toast("Logging in...", {
        position: 'top-center'
      })

      const res = await resp;

      const token = res.data.access
      setUser({ id: res.data.user_id, user_type: res.data.user_type }, user, setUser)
      try {
        const response = await api.get(`/reg/view-attendee/${res.data.user_id}`)

        setUser(prev => ({ ...prev, access_token: token, user_id: res.data.user_id, user_type: res?.data?.user_type, resUser: response.data.data }))

        toast.success(`Welcome back ${response.data.data.surname}`, {
          position: 'top-center',
          className: 'text-center',
          style: {
            backgroundColor: palate.background.default,
            color: palate.neutral.light
          }
        })
      } catch (error) {
        toast.warn(`ERROR: ${error}`, {
          position: 'top-center',
          className: 'text-center',
          style: {
            backgroundColor: palate.background.default,
            color: palate.neutral.light
          }
        })
      }
      navigate("/explore");
    } catch (err) {
      !err?.response ?
        toast.error(`ERROR: ${err}`, {
          position: 'top-center',
          style: {
            backgroundColor: palate.background.default,
            color: palate.neutral.light
          }
        }) :
        err?.response?.status === 400 ?
          toast.warn('Missing CYS_CODE or Password', {
            position: 'top-center',
            style: {
              backgroundColor: palate.background.default,
              color: palate.neutral.light
            }
          }) :
          err?.response?.status === 401 ?
            toast.warn('Invalid CYS_CODE or Password', {
              position: 'top-center',
              style: {
                backgroundColor: palate.background.default,
                color: palate.neutral.light
              }
            }) : toast.error('Login Failed', {
              position: 'top-center',
              style: {
                backgroundColor: palate.background.default,
                color: palate.neutral.light
              }
            });

    }
  };

  useEffect(() => {
    setTitle('login')
    user?.resUser && navigate(-1)
    return () => {
      setTitle
    }
  }, [user])

  return (
    <div className="container formCont">
      <div className=""
        onClick={e => e.stopPropagation()}>
      </div>
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="o-hidden border-0 my-5 br-3">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-3 d-none d-lg-block "></div>
                <div className="col-lg-6 form animated--grow-in shadow-sm"
                  style={{
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light,
                    borderRadius: '6px'
                  }}>
                  <div className={`p-5`}>
                    <div className="text-center">
                      <h1 className="h4 mb-4"
                        style={{
                          color: palate.neutral.light
                        }} >Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={handleLogin}>
                      <div className="form-group">
                        <input
                          type="text"
                          style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                          }}
                          className="form-control form-control-user"
                          placeholder="cys_code"
                          required
                          autoComplete="off"
                          name="username"
                          value={credentials.username}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                          }}
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          required
                          name="password"
                          value={credentials.password}
                          onChange={handleInputChange}
                        />
                        <hr />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-danger btn-user btn-block"
                      >
                        Login
                      </button>
                    </form>
                    <br />
                    <div className=" text-center">
                      <Link className="small" to='/reg/new-registration'>
                        Create an Account!
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
      </div>
    </div>
  );
};

export default Login;
