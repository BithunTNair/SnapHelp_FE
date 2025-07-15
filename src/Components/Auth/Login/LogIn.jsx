import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../../plugins/toast';
import axios from 'axios';
import { Input } from '../../Reusable/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../redux_toolkit/userSlice';
import Navbar from '../../Reusable/Navbar';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
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
                url: `${import.meta.env.VITE_BASE_URL}/auth/login`,
                data: data
            }).then((response) => {
                console.log(response.data);
                successToast('Welcome To Our World');


                localStorage.setItem('token', response.data.token);
                const userData = localStorage.setItem('user', JSON.stringify(response.data.user));
                dispatch(setUser(response.data.user));
                navigate('/', { replace: true });
            })
        } catch (error) {
            console.log(error.data);
            errorToast('something went wrong')
        }
    }


    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
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
                        <h2 className="text-3xl font-extrabold text-center text-[var(--primary-dark)]">Login</h2>
                        <p className="text-[var(--text-light)] text-center text-base">
                            Welcome back! Please login to your account.
                        </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-xl border border-[var(--primary)] bg-[var(--primary-light)] text-[var(--text-dark)] placeholder-[var(--text-light)] placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^[A-Za-z0-9]{8,}$/,
                                    message: 'Password must be at least 8 characters (letters or numbers)',
                                },
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

                        <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-lg text-center text-[var(--text-dark)]">
                        Don’t have an account?{' '}
                        <span className="text-[var(--accent)] hover:underline cursor-pointer font-semibold" onClick={() => navigate('/register_user')} >Sign up</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login