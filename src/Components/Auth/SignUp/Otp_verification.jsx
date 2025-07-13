import React from 'react'
import { useForm } from 'react-hook-form';
import { errorToast, successToast } from '../../../plugins/toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Reusable/Navbar';

const Otp_verification = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const otp = data.otp;
    const joinedOTP = otp.join('');
    try {
      axios({
        method: 'POST',
        url: `${import.meta.env.VITE_BASE_URL}/auth/verify_otp/${user._id}`,
        data: { otp: joinedOTP }
      }).then((response) => {
        successToast('OTP Verification successfull');
        navigate('/set_password')
      })
    } catch (error) {
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
            <h2 className="text-3xl font-extrabold text-center text-[var(--primary-dark)]">Verify OTP</h2>
            <p className="text-[var(--text-light)] text-center text-base">
              Enter the 6-digit code sent to your email
            </p>
          </div>
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center gap-3 md:gap-4">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  autoComplete="off"
                  {...register(`otp[${index}]`, {
                    required: 'OTP is required',
                    pattern: {
                      value: /^\d{1}$/,
                      message: 'Each OTP digit must be a number',
                    },
                  })}
                  className="w-12 h-14 text-center rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] text-2xl font-bold placeholder-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                />
              ))}
            </div>
            {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}

            <div className="text-sm text-center text-[var(--text-light)]">
              Didn’t receive the code?{' '}
              <button
                type="button"
                className="text-[var(--accent)] hover:underline font-semibold"
              >
                Resend
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Otp_verification