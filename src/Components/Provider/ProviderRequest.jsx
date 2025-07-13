import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../Reusable/Input';
import Navbar from '../Reusable/Navbar';

const ProviderRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
    
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
   
      <div className="pt-20 min-h-screen flex items-center justify-center bg-[var(--primary-light)]"
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
            <h2 className="text-3xl font-extrabold text-center text-[var(--primary-dark)]">Provider Request</h2>
            <p className="text-[var(--text-light)] text-center text-base">
              Fill out the form to request to become a service provider.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(() => {})}>
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

            <Input
              placeholder="Bio"
              className="w-full rounded-xl  bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition resize-none"
              rows={3}
              {...register('bio', { required: 'Bio is required' })}
            />
            {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}

            <Input
              type="text"
              placeholder="Skills (comma separated)"
              className="w-full rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
              {...register('skill', { required: 'At least one skill is required' })}
            />
            {errors.skill && <p className="text-red-500 text-sm mt-1">{errors.skill.message}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProviderRequest;