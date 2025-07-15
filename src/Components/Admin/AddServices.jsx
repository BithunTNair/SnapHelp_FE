
import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Reusable/Navbar';
import { Input } from '../Reusable/Input';



const AddServices = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="min-h-screen pt-24 pb-10 px-2 sm:px-6 bg-[var(--primary-light)] flex flex-col items-center">
        <div className="relative w-full max-w-lg border border-[var(--primary)] rounded-3xl shadow-2xl p-10 space-y-8 bg-white/90 backdrop-blur-lg mt-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center shadow-lg mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path fill="var(--primary-light)" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-center text-[var(--primary-dark)]">Add New Service</h2>
            <p className="text-[var(--text-light)] text-center text-base">
              Fill out the form to add a new service to the marketplace.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit(() => {})}>
            <div className="flex flex-col gap-2">
              <div className="flex w-full gap-2">
                <Input
                  type="text"
                  placeholder="Service Type"
                  className="flex-1 rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                  {...register('serviceType', { required: 'Service Type is required' })}
                />
                <button
                  type="button"
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold text-base shadow hover:shadow-xl hover:scale-105 transition-transform duration-300 mt-1"
                >
                  Search
                </button>
              </div>
              {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>}
            
           
              <div className="bg-white/80 border border-[var(--primary-light)] rounded-2xl shadow p-4 min-h-[120px] mt-2">
                <h3 className="text-lg font-bold text-[var(--primary-dark)] mb-3">Suggested Providers</h3>
                <ul className="space-y-3">
                   <li  className="flex items-center justify-between bg-[var(--primary-light)] rounded-xl px-3 py-2">
                      <span className="text-[var(--primary)] font-medium">Provider Name</span>
                      <button className="px-3 py-1 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-xs font-semibold shadow hover:scale-105 transition-transform duration-200">Add</button>
                    </li>
                </ul>
              </div>
            </div>

            <Input
              type="number"
              placeholder="Rate (₹)"
              className="w-full rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
              {...register('rate', { required: 'Rate is required' })}
            />
            {errors.rate && <p className="text-red-500 text-sm mt-1">{errors.rate.message}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Add Service
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddServices;