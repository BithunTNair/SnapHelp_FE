import React from 'react'
import { useForm } from "react-hook-form";
import { errorToast, successToast } from '../../../plugins/toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Input } from '../../Reusable/Input';
import Navbar from '../../Reusable/Navbar';

const Generate_otp = () => {
    const navigate = useNavigate()

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
                url: `${import.meta.env.VITE_BASE_URL}/auth/generate_otp`,
                data: data
            }).then((response) => {
                console.log(response.data);
                successToast('OTP sent to your email');
                navigate('/verify_otp')
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
                                <path fill="var(--primary-light)" d="M17 10V7a5 5 0 0 0-10 0v3a4 4 0 0 0-2 3.465V17a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3.535A4 4 0 0 0 17 10Zm-8-3a3 3 0 1 1 6 0v3H9V7Zm10 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3.535A2 2 0 0 1 7 11h10a2 2 0 0 1 2 2.465V17Z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-extrabold text-center text-[var(--primary-dark)]">OTP Generation</h2>
                        <p className="text-[var(--text-light)] text-center text-base">
                            An OTP will be sent to your email.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Input
                            type="text"
                            placeholder="Enter Email"
                            className="w-full rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid Email',
                                },
                            })}
                        />
                        {errors.email && <p className="mt-1 text-red-500">{errors.email.message}</p>}

                        <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                        >
                            Generate OTP
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

export default Generate_otp