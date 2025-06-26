import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { errorToast, successToast } from '../../../plugins/toast';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../Reusable/Input';
const Register_user = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    try {
      axios({
        method: 'POST',
        url: `${import.meta.env.VITE_BASE_URL}/auth/register_user`,
        data: data
      }).then((response) => {
        console.log(response.data);
        successToast('User Registration Successfull');
        navigate('/generateOTP');
        localStorage.setItem('user', JSON.stringify(response.data.registered_user));

      })
    } catch (error) {
      console.log(error.data);
      errorToast('something went wrong')
    }
  }
  return (

    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-4 relative overflow-hidden">

        <div className="relative w-full max-w-md border border-[var(--accent-light)] rounded-4xl shadow-2xl p-8 space-y-6 text-[var(--text-main)]">
          <h2 className="text-3xl font-bold text-center text-[var(--heading)]">Create Account</h2>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-main)] placeholder-[var(--placeholder)] placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              {...register('fullName', { required: 'Full Name is required' })}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}

            <Input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-main)] placeholder-[var(--placeholder)] placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid Email',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

            <Input
              type="text"
              placeholder="Mobile Number"
              className="w-full rounded-xl border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-main)] placeholder-[var(--placeholder)] placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              {...register('mobileNumber', {
                required: 'Mobile Number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Mobile Number must be exactly 10 digits',
                },
              })}
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-[var(--button-text)] text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </form>

          <p className="text-lg text-center text-[var(--heading)]">
            Already have an account?{' '}
            <span className="text-[var(--accent)] hover:underline cursor-pointer" onClick={() => { navigate('/login') }} >Login</span>
          </p>
        </div>
      </div>
    </>

  )
}

export default Register_user