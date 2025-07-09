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
      <div
        className="min-h-screen flex items-center justify-center bg-[var(--primary-light)]"
        style={{
          background: 'linear-gradient(135deg, var(--primary-light) 60%, var(--secondary-light) 100%)',
        }}
      >
        <div className="relative w-full max-w-lg border border-[var(--primary)] rounded-3xl shadow-2xl p-10 space-y-8 bg-white/90 backdrop-blur-lg">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path fill="var(--primary-light)" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-center text-[var(--primary-dark)]">Create Account</h2>
            <p className="text-[var(--text-light)] text-center text-base">
              Join SnapHelp and get instant access to trusted local services.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
              {...register('fullName', { required: 'Full Name is required' })}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}

            <Input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
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
              className="w-full rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
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
              className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </form>

          <p className="text-lg text-center text-[var(--text-dark)]">
            Already have an account?{' '}
            <span
              className="text-[var(--accent)] hover:underline cursor-pointer font-semibold"
              onClick={() => { navigate('/login') }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register_user