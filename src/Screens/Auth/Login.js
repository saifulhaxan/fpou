import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./style.css";

import { AuthLayout } from '../../Components/Layout/AuthLayout';
import CustomButton from '../../Components/CustomButton';
import CustomInput from "../../Components/CustomInput"


const AdminLogin = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({})

    useEffect(() => {
        document.title = 'Sean Outlet | Login';
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }

    return (
        <>
            <AuthLayout authTitle='Login' authPara='Login into your Account'>
                <form>
                    <CustomInput label='Email Address' required id='userEmail' type='email' placeholder='Enter Your Email Address' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value })
                    }} />
                    <CustomInput label='Password' required id='pass' type='password' placeholder='Enter Password' labelClass='mainLabel' inputClass='mainInput' />
                    <div className="d-flex align-items-baseline justify-content-between mt-1">
                        <div className="checkBox">
                            <input type="checkbox" name="rememberMe" id="rememberMe" className='me-1' />
                            <label htmlFor="rememberMe" className='fw-semibold'>Remember Me</label>
                        </div>
                        <Link to={'/forget-password'} className='text-dark text-decoration-underline'>Forget Password?</Link>
                    </div>
                    <div className="mt-4 text-center">
                        <CustomButton variant='primaryButton' text='Login' onClick={handleClick} />
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}


export default AdminLogin
