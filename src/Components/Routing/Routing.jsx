import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// import LandingPage from '../components/landing_page/Landing'
import Otp_verification from '../Auth/SignUp/Otp_verification'
import SetPassword from '../Auth/SignUp/Set_password'
import Login from '../Auth/Login/LogIn'
import Home from '../Home/Home'
import Register_user from '../Auth/SignUp/Register_user'
import Generate_otp from '../Auth/SignUp/Generate_otp'
import ProviderRequest from '../Provider/ProviderRequest'
import Services from '../User/Services'
import AddServices from '../Admin/AddServices'

const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register_user' element={<Register_user />} />
                    <Route path='/generateOTP' element={<Generate_otp />} />
                    <Route path='/verify_otp' element={<Otp_verification />} />
                    <Route path='/set_password' element={<SetPassword />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/provider_request' element={<ProviderRequest />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/admin/addservice' element={<AddServices />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing