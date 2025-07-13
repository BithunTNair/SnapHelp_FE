import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../../plugins/toast';
import { Input } from '../../Reusable/Input';
import Navbar from '../../Reusable/Navbar';

const Set_password = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

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
        url: `${import.meta.env.VITE_BASE_URL}/auth/create_password/${user._id}`,
        data: data,
        params: { id: user._id }
      }).then((response) => {
        console.log(response.data);
        successToast('Your account is created successfully');
        navigate('/login')

      })
    } catch (error) {
      console.log(error);
      errorToast('something went wrong')

    }
  }
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar/>
      </div>
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
                <path fill="var(--primary-light)" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-center text-[var(--primary-dark)]">Set Password</h2>
            <p className="text-[var(--text-light)] text-center text-base">
              Create a secure password to complete your registration
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="password"
              placeholder="New Password"
              className="w-full rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^[A-Za-z0-9]{8,}$/,
                  message: 'Password must be at least 8 characters (letters or numbers)',
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Set Password
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Set_password