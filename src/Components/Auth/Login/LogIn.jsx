import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../../plugins/toast';
import axios from 'axios';
import { Input } from '../../Reusable/Input';
// import { useDispatch, useSelector } from 'react-redux';
// import { setUser } from '../../../redux_toolkit/userSlice';


const Login = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const user = useSelector(state => state.user)
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
                 navigate('/');
                localStorage.setItem('token', response.data.token);
                const userData = localStorage.setItem('user', JSON.stringify(response.data.user));
                dispatch(setUser(userData))
               

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
                <h2 className="text-3xl font-bold text-center text-[var(--heading)]">Login</h2>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                    <Input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-xl border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-main)] placeholder-[var(--placeholder)] placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^[A-Za-z0-9]{8,}$/,
                                message: 'Password must be at least 8 characters (letters or numbers)',
                            },
                        })}
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] font-semibold text-[var(--button-text)] text-lg shadow-lg hover:shadow-xl hover:scale-105 hover:cursor-pointer transition-transform duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="text-lg text-center text-[var(--heading)]">
                    Don’t have an account?{' '}
                    <span className="text-[var(--accent)] hover:underline cursor-pointer" onClick={() => navigate('/register_user')} >Sign up</span>
                </p>
            </div>
        </div>
    </>
    )
}

export default Login