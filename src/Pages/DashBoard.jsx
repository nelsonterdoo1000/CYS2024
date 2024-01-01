import React, { useEffect, useState } from "react";
import DashAlerts from "../components/Alerts/DashAlerts";
import { useStateContext } from "../State/StateContext";
import UpComing from "../components/programs/filters/upComing";
import { Link } from "react-router-dom";
import theme from "../theme";
import { toast } from "react-toastify";
import api from "../../api/api";
import { FaCopy } from "react-icons/fa";

const DashBoard = () => {
  const { setSideNavSelected, programmes, notifications, log } = useStateContext()
  const palate = theme()
  const date = new Date()
 
  useEffect(() => {
    setSideNavSelected('dash')
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex align-items-center justify-content-between mb-3" >
          <h1 className="h3 mb-0 ">Dashboard</h1>
        </div>

        {/* upComing Programmes */}
        <div className=" p-1">
          <div className="demo-graphs animated--grow-in p-0 mb-4 br-3 p-0" style={{
            color: palate.neutral.light
          }}>
            {/* <div className="card-header h5">
              Main
            </div> */}
            <div>
              <UpComing programs={programmes} options={
                <Link to={`/explore/programs/upComing`} className={`btn btn-danger p-1 h-link my-auto`}>
                  Go To
                </Link>} />
            </div>
          </div>
        </div>

        {/* Confetti thing */}
        <div className="col-lg-8 pl-lg-2">
          <div className="demo-graphs shadow-sm animated--grow-in p-0 mb-4 br-3" style={{
            backgroundColor: palate.background.default,
            color: palate.neutral.light
          }}>
            <div className="card-body p-0">
              <div className="row no-gutters p-0  br-3">
                <div className="col-sm-6 py-5 d-flex">
                  <img src="/cysm.png" alt="" className='img-fluid m-auto col-sm-10 col-md-8' />
                </div>
                <div className="col-sm-6">
                  <div className="container-fluid p-3 py-sm-5">
                    <div>
                      <h1 className="h3">
                        Christian Youth Summit
                      </h1>
                    </div>
                    <form className="text-gray-600">
                      amet consectetur adipisicing elit. Natus sequi temporibus quaerat! Nam sed veniam facilis rem dicta natus obcaecati quos ipsum, tenetur rerum eum voluptates labore possimus ratione ipsam.
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="col-lg-4 col-md-12 pl-lg-2 mb-3 row no-gutters">
          <div className="col-lg-12 pr-sm-2 pr-lg-0">
            <div className="demo-graphs shadow-sm animated--grow-in p-0 br-3 mb-4" style={{
              backgroundColor: palate.background.default
            }}>
              <div className="p-3 fs m-0"
                id="notifications" >
                Notifications
              </div>
              <hr className="p-0 m-0" />
              <div className="scrollable">
                {notifications.length ?
                  notifications.map((note, i) => (
                    <div className="">
                      <DashAlerts key={i} props={note} />
                    </div>
                  ))
                  : <div className="ml-3">No New Notifications To Dislay</div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;