import { useStateContext } from "../State/StateContext";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import theme from "../theme";
import OnGoing from "../components/programs/filters/onGoing";
import { toast } from "react-toastify";
import api from "../../api/api";
import { FaCopy } from "react-icons/fa";

const Registration = () => {
  const navigate = useNavigate();
  const [tag, setTag] = useState("");
  const { setSideNavSelected, programmes, selected, setSelected } =
    useStateContext();
  const theProgram = programmes.find((program) => program?.id == selected);
  const setInf = (e) => {
    const { value } = e.target;
    setSelected(value);
  };

  const palate = theme();

  const [foundUsers, setFoundUsers] = useState([]);

  const [cred, setCred] = useState({
    surname: "",
    state: "",
    town_of_residence: "",
    cys_code: "",
  });

  const handleCred = (e) => {
    const { name, value } = e.target;
    setCred((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    toast(`Requesting...`, {
      position: "top-center",
      style: {
        backgroundColor: palate.background.default,
        color: palate.neutral.light,
      },
    });
    const cys_code = cred.cys_code;
    const program_id = theProgram?.id;
    try {
      const response = await api.post(`/reg/get-user-tag`, {
        cys_code,
        program_id
      })
      const blob = new Blob([response.data]); // Use response.data to get the blob
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${cys_code}_tag.pdf`;
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      toast.success(`Success, Check downloads for "${cys_code}_tag.pdf"`, {
        position: "top-center",
        style: {
          backgroundColor: palate.background.default,
          color: palate.neutral.light,
        }
      });
    } catch (err) {
      console.error(err);
      toast.error(`ERROR: ${err}`, {
        position: "top-center",
        style: {
          backgroundColor: palate.background.default,
          color: palate.neutral.light,
        },
      });
      err.response == 404 && navigate(`/program-register/${theProgram?.id}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast(`fetching...`, {
      position: "top-center",
      style: {
        backgroundColor: palate.background.default,
        color: palate.neutral.light,
      },
    });
    try {
      const res = await api.get(
        `/reg/attendance?surname=${cred.surname}&state=${cred.state}&town_of_residence=${cred.town_of_residence}`
      );
      setFoundUsers(res.data);
      navigate("#notifications");
      toast.success(`Done results: ${res.data.length}`, {
        position: "top-center",
        style: {
          backgroundColor: palate.background.default,
          color: palate.neutral.light,
        },
      });
    } catch (err) {
      console.error(err);
      toast.error(`ERROR: ${err}`, {
        position: "top-center",
        style: {
          backgroundColor: palate.background.default,
          color: palate.neutral.light,
        },
      });
    }
  };

  useEffect(() => {
    setSideNavSelected("reg");
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="h3 mb-0 ">Registration</h1>
        </div>

        {/* upComing Programmes */}
        <div className="p-1">
          <div
            className="demo-graphs animated--grow-in p-0 mb-4 br-3 p-0"
            style={{
              color: palate.neutral.light,
            }}
          >
            <div>
              <OnGoing
                programs={programmes}
                options={
                  <Link
                    to={`/explore/programs/upComing`}
                    className={`btn btn-danger p-1 h-link my-auto`}
                  >
                    Go To
                  </Link>
                }
              />
            </div>
          </div>
        </div>

        {/* Action Board */}
        <div className="col-lg-8 pl-lg-2">
          <div
            className="demo-graphs shadow-sm animated--grow-in p-0 mb-4 br-3"
            style={{
              backgroundColor: palate.background.default,
              color: palate.neutral.light,
            }}
          >
            <div className="card-body p-0">
              <div className="row no-gutters p-0 br-3">
                <div className="o-hidden border-0 p-0 m-12 d-flex f-row m-auto regCard">
                  <div
                    className="animated--grow-in mt-5 br-3"
                    style={{
                      backgroundColor: palate.background.default,
                      color: palate.neutral.light,
                    }}
                  >
                    <div className="shadow-sm py-md-0 br-3">
                      <div className="text-center p-0">
                        <h1 className="h4 fs-5 fs-md-4 mb-2">
                          <div className="form-group pl-5 pr-5">
                            <select
                              type="text"
                              className="form-control select cardEl"
                              style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light,
                              }}
                              aria-describedby="The proggramme you are to register for"
                              placeholder="Gender"
                              required
                              name="programme_id"
                              value={selected}
                              onChange={setInf}
                            >
                              {programmes?.map((program) => (
                                <option value={program?.id} key={program?.id}>
                                  {program?.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </h1>
                      </div>
                      <form className="row p-3  d-flex">
                        <Link
                          className="noDec col-sm-6 p-3"
                          to={`/program_register-new/${theProgram?.id}`}
                        >
                          <div
                            className="heighInherit my-auto text-center cardEl br-3 p-5 d-flex"
                            style={{
                              color: palate.neutral.main,
                            }}
                          >
                            <span className="m-auto">
                              New Batch Registration (Obtain New CYS_CODE +
                              Register for {theProgram?.name})
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="noDec col-sm-6 p-3"
                          to={`/reg/new-registration`}
                        >
                          <div
                            className="heighInherit my-auto text-center cardEl  br-3 p-5 d-flex"
                            style={{
                              color: palate.neutral.main,
                            }}
                          >
                            <span className="m-auto">
                              New Registration (Obtain New CYS_CODE)
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="noDec col-sm-6 p-3"
                          to={`/explore/program_registerother/${theProgram?.id}`}
                        >
                          <div
                            className="heighInherit my-auto text-center cardEl  br-3 p-5 d-flex"
                            style={{
                              color: palate.neutral.main,
                            }}
                          >
                            <span className="m-auto">
                              {" "}
                              Register for {theProgram?.name} With CYS_CODE
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="noDec col-sm-6 p-3"
                          to={`/program_registerWithCode/${theProgram?.id}`}
                        >
                          <div
                            className="heighInherit my-auto text-center cardEl  br-3 p-5 d-flex"
                            style={{
                              color: palate.neutral.main,
                            }}
                          >
                            <span className="m-auto">
                              Batch Register for {theProgram?.name} with
                              CYS_CODE{" "}
                            </span>
                          </div>
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Action Board End*/}

        {/* Get Tag */}
        <div className="col-lg-4 pr-sm-2 pr-lg-0">
          <div
            className="demo-graphs shadow-sm animated--grow-in p-0 br-3 mb-4"
            style={{
              backgroundColor: palate.background.default,
            }}
          >
            <div className="py-3 fs m-0 container-fluid" id="notifications">
              Attendee Tag for {theProgram?.name}
            </div>
            <hr className="p-0 m-0" />
            <div className="">
              <form
                className="user container-fluid"
                onSubmit={handleRequest}
                style={{
                  backgroundColor: palate.background.default,
                }}
              >
                <div className="form-group row">
                  <div className="mb-3 mb-sm-0">
                    <input
                      type="text"
                      style={{
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light,
                      }}
                      className="form-control"
                      id="exampleFirstName"
                      placeholder="CYS_CODE"
                      required
                      name="cys_code"
                      value={cred?.cys_code}
                      onChange={handleCred}
                    />
                  </div>
                </div>
                <button className="form-control btn btn-danger">Get tag</button>
              </form>
              {
                <div className="container-fluid help-block">
                  Search parameters are not optional
                </div>
              }
            </div>
          </div>

          <div
            className="demo-graphs shadow-sm animated--grow-in p-0 br-3 mb-4"
            style={{
              backgroundColor: palate.background.default,
            }}
          >
            <div className="py-3 fs m-0 container-fluid">
              Retrieve A CYS_CODE
            </div>
            <hr className="p-0 m-0" />
            <div className="">
              <form
                className="user container-fluid"
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: palate.background.default,
                }}
              >
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      style={{
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light,
                      }}
                      className="form-control"
                      id="exampleFirstName"
                      placeholder="Surname"
                      required
                      name="surname"
                      value={cred.surname}
                      onChange={handleCred}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      style={{
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light,
                      }}
                      className="form-control"
                      required
                      placeholder="State"
                      name="state"
                      value={cred.state}
                      onChange={handleCred}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    style={{
                      backgroundColor: palate.background.default,
                      color: palate.neutral.light,
                    }}
                    className="form-control"
                    required
                    placeholder="Town of residence"
                    name="town_of_residence"
                    value={cred.town_of_residence}
                    onChange={handleCred}
                  />
                </div>
                <button className="form-control btn btn-danger">Find</button>
              </form>
              {
                <div className="container-fluid help-block">
                  Search parameters are not optional
                </div>
              }
            </div>
          </div>
        </div>
        {/* Get Tag End */}
      </div>
      {foundUsers?.length ? (
        <div className="col-lg-12 p-0">
          <div
            className="demo-graphs shadow-sm animated--grow-in p-0 br-3 mb-4"
            style={{
              backgroundColor: palate.background.default,
            }}
          >
            <div className="py-3 fs m-0 container-fluid">Search Result</div>
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>CYS_CODE</th>
                    <th>Town Of Residence</th>
                    <th>State</th>
                    <th>More</th>
                  </tr>
                </thead>
                {foundUsers?.map((user, i) => (
                  <tr
                    className="card-h animated--grow-in slideInDown"
                    id="notifications"
                    key={i}
                  >
                    <td>
                      {`${user?.surname || ""} ${user?.other_name || ""}`}{" "}
                    </td>
                    <td>{user?.cys_code}</td>
                    <td>{user?.town_of_residence}</td>
                    <td>{user?.state}</td>
                    <td className="noOutline d-flex p-2">
                      <Link
                        to={"#"}
                        className=" noDec my-auto aPro p-3 ml-auto mr-auto noOutLine"
                        onClick={() => {
                          try {
                            navigator.clipboard.writeText(user?.cys_code);
                            toast.success(
                              `Copied "${user.cys_code}" to clipboard`,
                              {
                                position: "top-center",
                                style: {
                                  backgroundColor: palate.background.default,
                                  color: palate.neutral.light,
                                },
                                delay: "2s",
                              }
                            );
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                      >
                        <FaCopy className="fs-" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Registration;
