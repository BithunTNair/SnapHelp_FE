import React from 'react'
import { useForm } from 'react-hook-form';
import { errorToast, successToast } from '../../../plugins/toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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
    console.log(data);
    const otp = data.otp;
    const joinedOTP = otp.join('');
    console.log(joinedOTP);

    try {
      axios({
        method: 'POST',
        url: `${import.meta.env.VITE_BASE_URL}/auth/verify_otp/${user._id}`,
        data: { otp: joinedOTP }
      }).then((response) => {
        console.log(response.data);
        successToast('OTP Verification successfull');
        navigate('/set_password')

      })
    } catch (error) {
      console.log(error);
      errorToast('something went wrong')

    }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-4 relative overflow-hidden">

        <div className="relative w-full max-w-md border border-[var(--accent-light)] rounded-4xl shadow-2xl p-10 text-center z-10 space-y-6">
          <h2 className="text-3xl font-bold text-[var(--heading)]">Verify OTP</h2>
          <p className="text-[var(--heading)]/80 text-sm">
            Enter the 6-digit code sent to your email
          </p>

          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center gap-4">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="number"
                  maxLength="1"
                  {...register(`otp[${index}]`, {
                    required: 'OTP is required',
                    pattern: {
                      value: /^\d{1}$/,
                      message: 'Each OTP digit must be a number',
                    },
                  })}
                  className="w-12 h-14 text-center rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-main)] placeholder-[var(--gray)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              ))}
            </div>
            {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}

            <div className="text-sm text-[var(--heading)]/70">
              Didn’t receive the code?{' '}
              <button
                type="button"
                className="text-[var(--accent)] hover:underline"
                onClick={() => { }}
              >
                Resend
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-[var(--button-text)] text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
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