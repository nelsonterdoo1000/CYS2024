import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useStateContext } from './State/StateContext';

import Nav from "./components/Nav/Nav";

import NotFound from './Pages/NotFound';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Register from "./components/program/register/Register";
import RegisterOthers from "./components/program/register/RegisterOthers";
import RegWithCode from './Pages/RegWithCode'

import Home from "./Pages/HomePage";

import Explore from './Pages/Explore'
import DashBoard from "./Pages/DashBoard";
import Programs from './Pages/Programs'
import AboutPage from "./Pages/AboutPage";
import DiscoverPage from "./Pages/DiscoverPage";
import Registration from "./Pages/Registration";
import ProfilePage from "./Pages/ProfilePage";
import EditProfile from "./Pages/EditProfile";
import Program from "./Pages/Program";
import ProgramElse from "./components/HomeProgrammes/Programme";

import Admin from "./Pages/Admin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Attendees from "./components/Admin/Attendees";
import AttendeeView from "./components/Admin/attendees/AttendeeView";
import EditAttendee from "./components/Admin/attendees/EditAttendee";
import Programmes from "./components/Admin/Progammes";
import ProgramsView from "./components/Admin/programs/ProgramsView";
import CreateNew from "./components/Admin/programs/CreateNew";
import Blog from "./components/Admin/Blog";
import BlogSingle from "./Pages/BlogSingle";

import RegisterConfetti from "./Pages/RegisterConfetti";
import LoginConfetti from "./Pages/LoginConfetti";

import ProtectedRoute from "./utils/ProtectedRoute";
import theme from "./theme";
import RegNew from "./Pages/RegNew";
import RegOptions from "./Pages/RegOptions";
import AdminProtected from "./utils/AdminProtected";
import RegistraProtected from "./utils/RegistraProtected";

function Layout() {
  const [errMsg, setErrMsg] = useState('')
  const palate = theme()
  const { title, mode } = useStateContext()

  useEffect(() => {

    window.addEventListener("offline", () => setErrMsg({
      msg: 'You are offline',
      type: 'warn'
    }))
    window.addEventListener("online", () => {
      setErrMsg({
        msg: 'Back online',
        type: 'success'
      })
      setTimeout(() => {
        setErrMsg('')
      }, 3000);
    })

    return () => {
    }
  }, [])

  return (
    <>
      <header>
        <meta name='color-scheme' content={mode} />
        <title>Christian Youth summit - {title}</title>
      </header>
      <div className="body"
        style={{
          backgroundColor: palate.background.alt,
          color: palate.neutral.main
        }}>

        <div id="top"></div>

        <ToastContainer toastStyle={{
          backgroundColor: palate.background.default,
          color: palate.neutral.main
        }} />
        <Nav />
        <Routes>
          <Route path="" element={<Home />} />

          {/* Explore parent route with it's descendants */}
          <Route path="explore" element={<ProtectedRoute><Explore /></ProtectedRoute>}>
            <Route index element={<DashBoard />} />

            <Route path="discover" element={<DiscoverPage />} />
            <Route path="discover/blog/:id" element={<BlogSingle />} />

            <Route path="program/:id" element={<Program />} />
            <Route path="program_registerself/:id" element={<Register />} />
            <Route path="program_registerother/:id" element={<RegisterOthers />} />
            <Route path="registration" element={<RegistraProtected><Registration /></RegistraProtected>} />

            {/* Nested Deeply nested route to Advanced programmes sorting */}
            <Route path="programs" element={<Programs />} >
              <Route path=":sort" element={<Programs />} />
            </Route>
            <Route path="my-profile" element={<ProfilePage />} />
          </Route>

          {/* Admin parent route with it's descendants*/}
          <Route path="admin" element={<AdminProtected> <Admin /> </AdminProtected>}>
            <Route index element={<AdminDashboard />} />
            <Route path="attendees" element={<Attendees />} />
            <Route path="attendees/attendee/:id" element={<AttendeeView />} />
            <Route path="attendees/attendee_update/:id" element={<EditAttendee />} />

            <Route path="programmes" element={<Programmes />} />
            <Route path="programmes/createNew" element={<CreateNew />} />
            <Route path="programmes/program/:id" element={<ProgramsView />} />

            <Route path="blog" element={<Blog />} />
          </Route>

          {/* Non nested routes */}

          <Route path="program/:id" element={<ProgramElse />} />
          <Route path="program_register/:id" element={<RegOptions />} />
          <Route path="program_registerWithCode/:id" element={<RegWithCode />} />
          <Route path="program_register-new/:id" element={<RegNew />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="reg/updateProfile" element={<EditProfile />} />
          <Route path="reg/login" element={<Login />} />
          <Route path="reg/new-registration" element={<Signup />} />
          <Route path='newAddress' element={<RegisterConfetti />} />
          <Route path='loginAddress' element={< LoginConfetti />} />
          <Route path='*' element={<NotFound />} />

          {/* Demo route */}
          <Route path='try' element={
            <div className="containerPro notFound">
              <h1 className="notFoundHOne d-flex animated--fade-in mt-2">
                Trying <span>...</span>
              </h1>
            </div>
          } />
        </Routes>
        {errMsg?.msg &&
          <p className={`formErr animated--grow-in slideInUp ${errMsg.type}`} >{errMsg.msg}</p>}
      </div>
    </>
  );
}

export default Layout;
